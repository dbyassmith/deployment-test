import { DeploymentTestPage } from './app.po';

describe('deployment-test App', () => {
  let page: DeploymentTestPage;

  beforeEach(() => {
    page = new DeploymentTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
