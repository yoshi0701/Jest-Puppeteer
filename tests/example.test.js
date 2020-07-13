import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage"
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from "../pages/components/TopBar"

import { username, password, timeout } from "../config";

describe('Example', () => {
  let homePage;
  let loginPage;
  let feedbackPage;
  let topBar;

  beforeAll(async () => {
    jest.setTimeout(timeout)
    homePage = new HomePage();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
    topBar = new TopBar();
  })
  it('Homepage should work', async () => {
    await homePage.visit();
  });

  it('navbar sholud be displayed', async () => {
    await homePage.isNavbarDisplayed();
    await topBar.isTopBarDisplayed();
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
    await feedbackPage.submitFeedback(
      'hoge',
      'hoge@test.com',
      'subject',
      'comment'
    );
  });

  it('should longin to application', async () => {
    await homePage.visit();
    await topBar.isTopBarDispayed();
    await topBar.clickSignInButton();
    await loginPage.isLoginFromDisplayed();
    await loginPage.login(username, password)
  })
});