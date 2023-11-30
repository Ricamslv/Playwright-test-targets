// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://en.hexabase.com/');
  await page.goto('https://en.hexabase.com/product/');
  //await page.goto('https://en.hexabase.com/database-api/?from_producttop');
  
  await page.getByRole('link', { name: 'Hexabase Overview', exact: true }).click();
  await page.getByRole('link', { name: 'Explore more' }).first().click();
  await page.getByRole('link', { name: 'Database & API', exact: true }).click();
});