const { test, expect } = require('./login')

test('Loads dashboard', async ({ webApp }) => {
    await expect(webApp.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(webApp).toHaveTitle(/.*Dashboard|OrangeHRM/);
    await expect(webApp).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(webApp.locator('text=Quick Launch')).toBeVisible();
    await webApp.screenshot({ path: 'screenshot.png', fullPage: true });
    
    /*await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('admin');
    await page.getByRole('textbox').nth(4).click();
    await page.locator('div').filter({ hasText: /^PasswordShould have at least 7 characters$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^PasswordShould have at least 7 characters$/ }).getByRole('textbox').fill('admintest');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('admintest');
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 number$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 number$/ }).getByRole('textbox').fill('admintest1');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('admintest1');
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('hint');
    await page.getByRole('textbox').nth(2).click();
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('s');
    await page.getByRole('option', { name: 'sita sitara chilla' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('ricamae');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('ricamae');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('cell', { name: '' }).locator('i').click()
    */
});