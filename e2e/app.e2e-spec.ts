import { DragonslayersPage } from './app.po';

describe('dragonslayers App', function() {
  let page: DragonslayersPage;

  beforeEach(() => {
    page = new DragonslayersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
