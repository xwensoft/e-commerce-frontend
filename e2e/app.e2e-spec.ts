import { ECommerceFrontendPage } from './app.po';

describe('e-commerce-frontend App', () => {
  let page: ECommerceFrontendPage;

  beforeEach(() => {
    page = new ECommerceFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
