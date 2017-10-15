import { GroceryappPage } from './app.po';

describe('groceryapp App', () => {
  let page: GroceryappPage;

  beforeEach(() => {
    page = new GroceryappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
