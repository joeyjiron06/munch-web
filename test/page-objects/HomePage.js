import PageObject from './PageObject';

class HomePageObject extends PageObject {
  constructor() {
    super(...arguments);
  }

  visit() {
    browser.url('/');
  }

  getTitle() {
    return browser.getTitle();
  }
}


export default HomePageObject;