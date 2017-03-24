import { VoteYourFavoriteColorPage } from './app.po';

describe('vote-your-favorite-color App', () => {
  let page: VoteYourFavoriteColorPage;

  beforeEach(() => {
    page = new VoteYourFavoriteColorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
