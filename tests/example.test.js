import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage"
import TopBar from "../pages/components/TopBar"

describe('Example', () => {
  let homepage;
  let loginpage;
  let topbar;

  beforeAll(async () => {
    jest.setTimeout(15000)
    homepage = new HomePage();
    loginpage = new LoginPage();
    topbar = new TopBar();
  })
  it('Homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar sholud be displayed', async () => {
    await homepage.isNavbarDisplayed();
    await topbar.isTopBarDisplayed();
  });

  it('try to login', async () => {
    await loginpage.visit()
    await loginpage.isLoginFromDisplayed();
    await loginpage.login('username', 'password');
    await loginpage.wait(5000);
  })
});