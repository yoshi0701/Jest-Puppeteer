export default class TopBar {
  async isTopBarDisplayed() {
    await page.waitForSelector(".brand");
    await page.waitForSelector('#signin_button');
  }

   async clickSingInButton() {
     await click('#signin_button');
   }
}