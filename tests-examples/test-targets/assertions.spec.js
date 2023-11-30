import { test, expect, devices } from '@playwright/test';
const { chromium } = require('playwright');

//mobile device
test.use({
    ...devices['iPhone 11'],
  });
 
test ('assertion', async () => {
 //chromium browser
const browser = await chromium.launch({
headless: false
});

  const context = await browser.newContext();
  const page = await context.newPage();

    await page.goto('https://apidoc.hexabase.com/');
    await page.pause();
    //Assertions
    //check elemt present or not
    await expect(page.locator('text=Hexabase API ガイド')).toHaveCount(1);
    
    if (await page.$('text=Hexabase API ガイド')){
        await page.locator('text=Hexabase API ガイド').click();
    };
    //check element hidden or vissible
    await expect(page.locator('text=Hexabase API ガイド')).toBeVisible();
    //await expect.soft(page.locator('text=Hexabase API ガイド')).toBeHidden();    

    //check element enabled or disabled
    await expect(page.locator('text=Hexabase API ガイド')).toBeEnabled();
    //await expect.soft(page.locator('text=Hexabase API ガイド')).toBeDisabled();

    //check text
    await expect(page.locator('text=Hexabase API ガイド')).toHaveText('Hexabase API ガイド');
    await expect(page.locator('text=Hexabase API ガイド')).not.toHaveText('Test');

    //check attribute
    await expect(page.locator('text=Hexabase API ガイド')).toHaveAttribute('class', 'hero__title');
    await expect(page.locator('text=Hexabase API ガイド')).toHaveClass(/.*hero__title/);

    //check page url and title
    await expect(page).toHaveURL('https://apidoc.hexabase.com/');
    await expect(page).toHaveTitle(/.*Top|Hexabase API ガイド/);

    await context.close();
    await browser.close();
}); 
  