import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getSiteTitle()).toEqual('Scythe of Seraph');
  });

  it('should go to the admin section', () => {
    page.navigateTo('/admin');
    expect(page.getSiteTitle()).toEqual('Admin');
  });
});
