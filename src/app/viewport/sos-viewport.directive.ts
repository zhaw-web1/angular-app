import {Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {ViewportService} from './viewport.service';
import {isPlatformBrowser} from '@angular/common';
import {filter, take} from 'rxjs/operators';
import {untilDestroy} from './untilDestroy';

@Directive({
  selector: '[appSosViewport]'
})
export class SosViewportDirective implements OnInit, OnDestroy {
  @Input() preRender = true;
  @Input() once = false;
  @Output() inViewport: EventEmitter<Partial<IntersectionObserverEntry>> = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private viewportService: ViewportService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.once) {
        this.viewportService
          .observe(this.elementRef.nativeElement)
          .pipe(untilDestroy(this), filter(entry => entry.intersectionRatio >= 0.5), take(1))
          .subscribe((entry) => {
            this.inViewport.emit(entry);
          });
      } else {
        this.viewportService
          .observe(this.elementRef.nativeElement)
          .pipe(untilDestroy(this))
          .subscribe((entry) => {
            this.inViewport.emit(entry);
          });
      }
    } else {
      if (this.preRender) {
        this.inViewport.emit({ isIntersecting: true, intersectionRatio: 1 });
      }
    }
  }

  ngOnDestroy() {}

}
