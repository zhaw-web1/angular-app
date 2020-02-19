import {Component, Inject, Input, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import {Request, Response} from 'express';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
  cookieName = 'hasCookieConsent';
  isShow = false;
  isBrowser = false;
  trackingCookiesNames = ['__utma', '__utmb', '__utmc', '__utmt', '__utmv', '__utmz', '_ga', '_gat'];

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    const hasConsent = this.hasConsent(this.cookieName);

    let userAgent = 'unknown';

    try {
      userAgent = navigator.userAgent;
    } catch (error) {
      if (error instanceof ReferenceError) {
        // reference error, probably server environment
        userAgent = this.request.headers['user-agent'] as string;
      } else throw error;
    }

    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);

    if (isBot || this.doNotTrack() || hasConsent === false) {
      return;
    }

    if (hasConsent === true) {
      this.launch();
      return;
    }

    this.isShow = true;
  }

  /**
   * EVERY STATISTICS SCRIPTS COME HERE
   */
  launch() {
    const script = this.document.createElement('script');
    script.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-113451399-1');
      `;
    this.document.head.appendChild(script);
  }

  setCookiesConsent(accept = false) {
    this.setCookie(this.cookieName, accept);
    this.isShow = false;

    if (accept) {
      this.launch();
    } else {
      this.deleteTrackingCookies();
    }
  }

  doNotTrack() {
    // default to true to be safe
    let dnt = '1';
    try {
      dnt = navigator.doNotTrack || window.doNotTrack;
    } catch (error) {
      if (error instanceof ReferenceError) {
        dnt = this.request.headers.dnt as string;
      } else throw error;
    }
    const canTrack = (dnt !== null && dnt !== undefined) ? (dnt && dnt !== 'yes' && dnt !== '1') : true;

    return !(canTrack);
  }

  hasConsent(cookieName) {
    if (!this.isBrowser) return null;
    try {
      return window.document.cookie.indexOf(cookieName + '=true') > -1 ? true :
        window.document.cookie.indexOf(cookieName + '=false') > -1 ? false : null;
    } catch (error) {
      if (error instanceof ReferenceError) {
        return this.request.cookies[cookieName] === 'true';
      } else throw error;
    }
  }

  setCookie(cookieName, cookieValue) {
    const date = new Date;
    const cookieTimeout = 33696e6;
    date.setTime(date.getTime() + cookieTimeout);

    try {
      window.document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toUTCString() + ';path=/';
    } catch (error) {
      if (error instanceof ReferenceError) {
        this.response.cookie(cookieName, cookieValue, {
          expires: date,
          path: '/'
        });
      } else throw error;
    }
  }

  deleteTrackingCookies() {
    const self = this;
    this.trackingCookiesNames.map(function (cookieName) {
      self.deleteCookie(cookieName);
    });
  }

  deleteCookie(cookieName) {
    try {
      let hostname = window.document.location.hostname;
      if (hostname != null) {
        if (0 === hostname.indexOf('www.')) {
          hostname = hostname.substring(4);
        }
        if (!this.isBrowser) return null;
        window.document.cookie = cookieName + '=; domain=.' + hostname + '; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
        window.document.cookie = cookieName + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';

      }
    } catch (error) {
      if (error instanceof ReferenceError) {
        let hostname = this.request.hostname;
        if (0 === hostname.indexOf('www.')) {
          hostname = hostname.substring(4);
        }
        this.response.clearCookie(cookieName, {
          path: '/',
          domain: '.' + hostname
        });
        this.response.clearCookie(cookieName, {
          path: '/'
        });
      } else throw error;
    }
  }


}
