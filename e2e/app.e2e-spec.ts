import { NewspaperadminPage } from './app.po';

describe('newspaperadmin App', function() {
  let page: NewspaperadminPage;

  beforeEach(() => {
    page = new NewspaperadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
