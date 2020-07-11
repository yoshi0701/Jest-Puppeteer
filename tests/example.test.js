import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage"
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from "../pages/components/TopBar"

describe('Example', () => {
  let homepage;
  // let loginpage;
  let feedbackPage;
  let topbar;

  beforeAll(async () => {
    jest.setTimeout(15000)
    homepage = new HomePage();
    // loginpage = new LoginPage();
    feedbackPage = new FeedbackPage();
    topbar = new TopBar();
  })
  it('Homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar sholud be displayed', async () => {
    await homepage.isNavbarDisplayed();
    await topbar.isTopBarDisplayed();
  });

  // it('try to login', async () => {
  //   await loginpage.visit()
  //   await loginpage.isLoginFromDisplayed();
  //   await loginpage.login('username', 'password');
  //   await loginpage.wait(5000);
  // })

  it('feedback should work', async () => {
    await feedbackPage.visit();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback('hoge', 'hoge@test.com', 'subject', 'comment');
    await feedbackPage.wait(5000);
  })
});