import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route: string) {
    return browser.get(route);
  }

  getSiteTitle() {
    return element(by.css('app-root h1')).getText();
  }
}
