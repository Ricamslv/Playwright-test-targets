// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('link', { name: 'TodoMVC', exact: true }).click();
  await page.getByRole('link', { name: 'React', exact: true }).click();
  await page.getByRole('link', { name: 'Source' }).first().click();
});