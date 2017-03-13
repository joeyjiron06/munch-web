import {expect} from 'chai';
import HomePage from '../page-objects/HomePage';

describe('Home Page', () => {
  let homePage;
  before(() => {
    homePage = new HomePage();
  });

  it('should have a title of Munch', () => {
    homePage.visit();
    expect(homePage.getTitle()).to.equal('Munch');
  });
});