// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://docusaurus.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Docusaurus/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://docusaurus.io/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Introduction.
  await expect(page.getByRole('heading', { name: 'Introduction' })).toBeVisible();
  
});


