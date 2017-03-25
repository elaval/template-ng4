import { EdudataPage } from './app.po';

describe('edudata App', () => {
  let page: EdudataPage;

  beforeEach(() => {
    page = new EdudataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
