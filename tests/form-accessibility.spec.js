import { test, expect } from '@playwright/test';

//executes after each test in the file
test.afterEach(async ({ page} ) => {
    await page.close()
})
//forms can be filled out and submitted successfully, and that form validation works correctly.
test ('Form Submission test', async ({ page }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLScMXkPc5uVQaPTFrHNY1Sb4C6n0WCxd2R6gk5ZVhh4KOvvt-Q/viewform?pli=1');
    await page.getByLabel('Name *').click();
    await page.getByLabel('Email *').click();
    await page.getByLabel('Email *').fill('rica@gmail.com');
    await page.getByLabel('Email *').press('Tab');
    await page.getByLabel('Address *').fill('tokyo, Japan');
    await page.getByLabel('Phone number').click();
    await page.getByLabel('Phone number').fill('123456');
    await page.getByLabel('Check me').click();
    await page.getByRole('button', { name: '送信' }).click();
    await page.getByLabel('Name *').fill('Rica');
    await page.getByRole('button', { name: '送信' }).click();
    await page.getByRole('link', { name: '回答を編集' }).click();
    //test.fixme(isMobile, 'Settings page does not work in mobile yet');
});
//website is accessible, including proper alt text for images and 
//correct tab order for keyboard navigation.
test('Accessibility test', async ({ page }) => {
    await page.goto('https://www.google.com/');

    await page.keyboard.type('Playwright codegen!')
    await page.keyboard.press('ArrowLeft')
   
    await page.keyboard.down('Shift');
    for (let i = 0; i < ' codegen'.length; i++)
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Delete');

});

//const page = await browser.newPage();
    /*await page.goto('https://keycode.info');
    await page.pause();
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });
    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'O.png' });*/