import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test 2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByLabel('open drawer').click();
  await page.getByLabel('open drawer').click();
  await page.getByLabel('open drawer').click();
  await page.getByLabel('Cookie banner').getByLabel('Close').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sign in' }).click();
  const page1 = await page1Promise;
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.goto('https://www.saucedemo.com/?/inventory.html');
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('div').filter({ hasText: /^Swag Labs$/ }).first().click();
});
