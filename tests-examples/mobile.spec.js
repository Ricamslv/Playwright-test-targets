// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').dblclick();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByText('This is just a demo of TodoMVC for testing, not the real TodoMVC app. todos').click();
  await page.getByText('Double-click to edit a todo').dblclick();
  await page.getByRole('heading', { name: 'todos' }).click();
  await page.getByText('Part of TodoMVC').click();
  await page.locator('html').click();
  await page.getByRole('link', { name: 'React', exact: true }).click();
});