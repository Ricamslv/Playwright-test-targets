import { test, expect, devices } from '@playwright/test';

//Responsive Design test
/*test.use({
    ...devices['iPhone 11'],
  });*/
 
  //Declares a group of tests.
test.describe('Test targets', () => {

test.beforeEach (async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
    //Pauses script execution
    //await page.pause(); 
})
test.afterEach(async ({ page} ) => {
    await page.close()
})

test ('HomePage test', async ({ page }) => {
    //check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    
    if (await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    };

    //check element hidden or vissible
    await expect(page.locator('img', { text: 'Chefs with code ingredients'})).toBeVisible();
    await expect(page.locator('text= The Kitchen' )).toBeVisible();
    await expect(page.locator('text=A pantry full of web')).toBeVisible();
    await expect(page.locator('text=AlertAPICanvasCookieDrag &')).toBeVisible();

    //Sometimes it is useful to take a screenshot of a single element.
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //await expect(page).toHaveScreenshot();
    
    //await page.waitForURL('https://kitchen.applitools.com/');
})
//clicking on navigation links correctly redirects to the corresponding pages.
test ('Navigation test', async ({ page }) => {
    await page.getByRole('link', { name: 'Links' }).click();
     //check page url and title
     await expect(page).toHaveURL('https://kitchen.applitools.com/ingredients/links');
     await expect(page).toHaveTitle(/.*Links|The Kitchen/);
    //navigate to another page
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'The Kitchen - Table' }).click();
    const page1 = await page1Promise;
    
})
//custom error page is displayed when trying to access a non-existent page.
test('Error page test', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/error');
    await page.locator('div').nth(1).click();
    await page.getByRole('heading', { name: 'This page could not be found.' }).click();
    test.fail('This page could not be found.');
    //await expect(locator).toHaveCount(0);
});
//correct meta tags for SEO, description.
test('SEO test', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', 'A pantry full of web components that can be used for automated testing.')

});

});

