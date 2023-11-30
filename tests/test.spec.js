import { test, expect } from '@playwright/test';

test.describe ('Test targets', () => {
    //test.describe.configure({ mode: 'parallel' });
////When used inside describe, runs before each test in the group
test.beforeEach ('LOGIN Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    //await page.pause();
})
test.afterEach(async ({ page} ) => {
    await page.close()
})
//homepage loads successfully and all elements are displayed correctly.
test('Homepage Load Test', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('#item_1_title_link').click();
    await page.getByText('Sauce Labs Bolt T-ShirtGet').click();
    await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=1');

})
test('Assertions', async ({ page }) => {
    await page.locator('#item_4_title_link').click();
    await page.getByText('Sauce Labs Backpack').click();
    //check text
    await expect(page.locator('text=Sauce Labs Backpack')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('text=Sauce Labs Backpack')).not.toHaveText('TEST');
    //check attribute
    await expect(page.locator('text=Sauce Labs Backpack')).toHaveAttribute('class', 'inventory_details_name large_size');
    await expect(page.locator('text=Sauce Labs Backpack')).toHaveClass(/.*inventory_details_name large_size/);
   
    await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=4');
})
//Users can log out and redirect to correct page after logging out
test('LOGOUT TEST', async ({ page }) => {
    await page.locator('text=Open Menu').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://www.saucedemo.com/');

})
});

