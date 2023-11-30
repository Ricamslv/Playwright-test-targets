import { test, expect, devices } from '@playwright/test';
const { chromium } = require('playwright');

//mobile device
test.use({
    ...devices['iPhone 11'],
  });
 
test ('form-responsive', async () => {
 //chromium browser
const browser = await chromium.launch({
headless: false
});

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  const metaDescription = page.locator('meta[name="description"]')
  await expect(metaDescription).toHaveAttribute(
  'content',
  'Sauce Labs Swag Labs app'
  )
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  //login button
  await page.locator('[data-test="login-button"]').click();
  //add to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '3' }).click();
  //checkout
  await page.locator('[data-test="checkout"]').click();
  //checkout information
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('rica');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('soliva');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="postalCode"]').click();
  //postal code fail
  await page.locator('[data-test="postalCode"]').fill('1234');
  //continue button
  await page.locator('[data-test="continue"]').click();
  //finish button
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();

  await context.close();
  await browser.close();
});
