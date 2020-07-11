import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar"

describe('Example', () => {
  let homepage;
  let topbar;

  beforeAll(async () => {
    jest.setTimeout(15000)
    homepage = new HomePage();
    topbar = new TopBar();
  })
  it('Homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar sholud be displayed', async () => {
    await homepage.isNavbarDisplayed();
    await topbar.isTopBarDisplayed();
  });
});