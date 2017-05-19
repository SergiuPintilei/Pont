import { PontPage } from './app.po';

describe('pont App', () => {
  let page: PontPage;

  beforeEach(() => {
    page = new PontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
