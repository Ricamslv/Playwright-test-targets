import { test, expect } from '@playwright/test';

test('fail in Chronium', async ({ page, browserName }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="password"]').press('Enter');
    await page.goto('https://www.saucedemo.com/v1/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
  test.fail(browserName === 'Chronium', 'This feature is not implemented for Mac yet');
  // ...
});