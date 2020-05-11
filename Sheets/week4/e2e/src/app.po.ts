import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root #title')).getText() as Promise<string>;
  }

  getBlogList(): ElementFinder {
    return element(by.css('app-root table.blogs'));
  }

  getBlogListRows() : ElementArrayFinder
  {
    return this.getBlogList().all(by.tagName('tr'));
  }


}
