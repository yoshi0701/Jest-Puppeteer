import HomePage from "../pages/HomePage";

describe('Example', () => {
  let homepage

  beforeAll(async () => {
    jest.setTimeout(15000)
    homepage = new HomePage();
  })
  it('Homepage should work', async () => {
    await homepage.visit();
  });

  it('navbar sholud be displayed', async () => {
    await homepage.isNavbarDisplayed();
  });
});