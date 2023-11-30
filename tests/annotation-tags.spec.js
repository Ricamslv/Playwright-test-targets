import { test } from '@playwright/test';

test.skip('skip this test', async () => {
    // This test will be skipped.
});

test('not yet ready', async () => {
    test.fail();
});

test.fixme('test to be fixed', async () => {
   
});
test('slow test', async () => {
    test.slow();
});

test('focus this test', async () => {
    //Run only focused test
});

//Tags
//test('test login page @smoke', async ({ page }) => {

//});