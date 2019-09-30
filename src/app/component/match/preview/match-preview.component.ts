import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Match} from '../models/match.model';
import {isPlatformBrowser} from '@angular/common';
import {ViewportModule} from '../../../viewport/viewport.module';

@Component({
  selector: 'app-match-preview',
  templateUrl: './match-preview.component.html',
  styleUrls: ['./match-preview.component.scss']
})
export class MatchPreviewComponent implements OnInit {

  @Input()
  match: Match;

  @Input()
  isDetail: boolean;

  loaded = false;
  animate = false;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
  }

  loadedImages(loaded: boolean) {
    this.loaded = loaded;
  }
}
