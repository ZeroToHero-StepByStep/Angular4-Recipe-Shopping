import { RecipeAndShoppingPage } from './app.po';

describe('recipe-and-shopping App', () => {
  let page: RecipeAndShoppingPage;

  beforeEach(() => {
    page = new RecipeAndShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
