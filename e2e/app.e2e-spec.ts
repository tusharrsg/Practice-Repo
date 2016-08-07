import { DemoprojectPage } from './app.po';

describe('demoproject App', function() {
  let page: DemoprojectPage;

  beforeEach(() => {
    page = new DemoprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
