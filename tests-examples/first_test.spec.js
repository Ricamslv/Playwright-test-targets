//const {test, expect} = require('@playwright/test');
const {chromium} = require('playwright');
//test('My first test', async ({page}) => {
(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
        await page.goto('https://google.com');
        const title = await page.title();
        console.log('title: ${title}');
        console.log('Homepage loaded successfully');
    }catch (error){
        console.log('error loading homepage:', error);
    }finally{
        await browser.close();
    }
    {/*await page.goto('https://google.com');
await expect(page).toHaveTitle(/Google/);*/}
})();