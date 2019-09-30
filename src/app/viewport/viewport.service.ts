import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {filter, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  options = {
    rootMargin: '0px 0px 0px 0px',
    threshold: [0.5],
  };
  observer = new IntersectionObserver(this.handler.bind(this), this.options);
  callback$: Subject<IntersectionObserverEntry> = new Subject();

  constructor(

  ) { }

  observe(element) {
    this.observer.observe(element);
    return this.callback$.asObservable()
      .pipe(
        filter((entry) => entry.target === element),
        finalize(() => this.observer.unobserve(element))
      );
  }

  handler(entries) {
    entries.forEach(entry => this.callback$.next(entry));
  }

}
