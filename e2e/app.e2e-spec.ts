import { TestScssPage } from './app.po';

describe('test-scss App', () => {
  let page: TestScssPage;

  beforeEach(() => {
    page = new TestScssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
