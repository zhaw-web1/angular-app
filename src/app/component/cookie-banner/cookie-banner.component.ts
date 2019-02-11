import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
  cookieName = 'hasCookieConsent';
  isShow = false;
  trackingCookiesNames = ['__utma', '__utmb', '__utmc', '__utmt', '__utmv', '__utmz', '_ga', '_gat'];

  constructor(
  ) { }

  ngOnInit() {
    const hasConsent = this.hasConsent(this.cookieName);

    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

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
    const script = document.createElement('script');
    script.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag(){
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-113451399-1');
      `;
    document.head.appendChild(script);
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
    const dnt = navigator.doNotTrack || window.doNotTrack;
    const canTrack = (dnt !== null && dnt !== undefined) ? (dnt && dnt !== 'yes' && dnt !== '1') : true;

    return !(canTrack);
  }

  hasConsent(cookieName) {
    return window.document.cookie.indexOf(cookieName + '=true') > -1 ? true :
      window.document.cookie.indexOf(cookieName + '=false') > -1 ? false : null;
  }

  setCookie(cookieName, cookieValue) {
    const date = new Date;
    const cookieTimeout = 33696e6;
    date.setTime(date.getTime() + cookieTimeout);
    window.document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toUTCString() + ';path=/';
  }

  deleteTrackingCookies() {
    const self = this;
    this.trackingCookiesNames.map(function (cookieName) {
      self.deleteCookie(cookieName);
    });
  }

  deleteCookie(cookieName) {
    let hostname = window.document.location.hostname;
    if (hostname != null) {
      if (0 === hostname.indexOf('www.')) {
        hostname = hostname.substring(4);
      }
      window.document.cookie = cookieName + '=; domain=.' + hostname + '; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
      window.document.cookie = cookieName + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
    }
  }

}
