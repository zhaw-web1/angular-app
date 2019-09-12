import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Team} from '../../../teams/team.model';
import {NgForm} from '@angular/forms';
import {Person} from '../../../person';
import {FileUploadService} from '../../file-upload.service';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

  @Input()
  team: Team = {
    players: []
  } as Team;

  @Input()
  provideId = false;

  @Output()
  submit: EventEmitter<{team: Team}> = new EventEmitter(true);

  @ViewChild('form')
  form: NgForm;

  player: Person = {} as Person;
  playerImage: Blob[];

  @Input()
  showPlayers = true;

  constructor(private fileUploadService: FileUploadService, private storage: AngularFireStorage) { }

  ngOnInit() {
    if (!this.team.id) {
      this.team.id = this.team.name.toLowerCase();
    }
  }

  async addPlayer() {
    const that = this;
    await this.uploadPlayerImage();
    if (!that.team.players) that.team.players = [];
    that.team.players.push(that.player);
    that.player = {} as Person;
    that._submit();
  }

  removePlayer(player: Person) {
    if (!confirm('Are you sure you want to delete this player?')) return;
    if (!this.team.players) this.team.players = [];
    const players = this.team.players;
    if (players.indexOf(player) > -1) {
      const index = players.indexOf(player);
      players.splice(index, 1);
    }
    this._submit();
  }

  // TODO: Fix team image upload Console error
  uploadImage(event) {
    console.log('uploading image');
    if (event.target.files && event.target.files.length) {
      const [file]: Blob[] = event.target.files;
      const upload = this.fileUploadService.uploadImage(file, `teams/images/${this.team.id}/thumbnail`, file.type);

      const downloadUrl = this.storage.ref(`teams/images/${this.team.id}/thumbnail`).getDownloadURL();

      const percentageChangeSubscription = upload.percentageChanges().subscribe(num => console.log(`upload: ${num}%`));

      upload.catch(err => {
        console.error(err);
        try {
          window.alert('Image could not be uploaded');
        } catch (error) {
          if (!(error instanceof ReferenceError)) throw error;
        }
      })
        .then(() => {
          try {
            percentageChangeSubscription.unsubscribe();
          } catch (ex) {
          }
          downloadUrl.subscribe((response) => {
            console.log('download-url: ' + response);
            this.team.logoUrl = response;
          });

          this.team.usesNewImage = true;
          this._submit();
        });
    }
  }

  savePlayerImage(event) {
    if (event.target.files && event.target.files.length) {
      this.playerImage = event.target.files;
    }
  }

  async uploadPlayerImage() {
    const [playerImage]: Blob[] = this.playerImage;
    if (!this.player.id) {
      this.player.id = this.player.nickname.toLowerCase();
    }

    try {
      const upload = this.fileUploadService.uploadImage(playerImage, `teams/images/${this.team.id}` +
        `/players/${this.player.id}/avatar`, playerImage.type);
      const percentageChangeSubscription = upload.percentageChanges().subscribe(num => console.log(`upload: ${num}%`));

      const uploaded = await upload;
      percentageChangeSubscription.unsubscribe();

      this.player.avatarUrl = await uploaded.ref.getDownloadURL();
      this.player.usesNewImage = true;
    } catch (ex) {
      console.error(ex);
      try {
        window.alert('Image could not be uploaded');
      } catch (error) {
        if (!(error instanceof ReferenceError)) throw error;
      }
    }
  }

  _submit() {
    this.submit.emit({team: this.team});
  }
}
