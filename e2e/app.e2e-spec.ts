import { ThegoodfellasWebsitePage } from './app.po';

describe('thegoodfellas-website App', function() {
  let page: ThegoodfellasWebsitePage;

  beforeEach(() => {
    page = new ThegoodfellasWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
