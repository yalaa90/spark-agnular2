import { AngularTechPage } from './app.po';

describe('angular-tech App', function() {
  let page: AngularTechPage;

  beforeEach(() => {
    page = new AngularTechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
