const {test, expect} = require('@playwright/test');
const { ORANGE_USER, ORANGE_PW } = process.env

exports.expect = expect;
exports.test = test.extend({
    webApp: async ({ page }, use) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill( process.env.ORANGE_USER );
        //await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Username').press('Tab');
        //await page.getByPlaceholder('Password').fill('admin123');
        await page.getByPlaceholder('Password').fill( process.env.ORANGE_PW );
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await use(page);
    },
}); 