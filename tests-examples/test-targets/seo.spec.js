import { test, expect } from '@playwright/test';

test('seo- meta and description test', async ({ page }) => {
    await page.goto('https://docusaurus.io/');
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute(
    'content',
    'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.'
    )
    test.slow();
      await page.goto('https://docusaurus.io/');
      await page.getByRole('button', { name: 'English' }).click();
      await page.getByRole('link', { name: 'Français' }).click();
      await page.getByLabel('Basculer entre le mode sombre').click();
      //await page.getByRole('link', { name: '3.0.0' }).click();
      await page.getByLabel('Réduire la catégorie \'').click();
      await page.getByLabel('Développer la catégorie \'Premiers pas\' de la barre latérale').click();
      await page.getByLabel('Barre latérale des docs').getByRole('link', { name: 'Installation' }).click();
      await page.getByRole('link', { name: 'Configuration', exact: true }).click();
      
      //const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
});

test('Very slow test', async ({ page }) => {
    await page.goto('https://docusaurus.io/');
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute(
    'content',
    'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.'
    )
      test.setTimeout(120000);
      await page.goto('https://docusaurus.io/');
      await page.getByRole('button', { name: 'English' }).click();
      await page.getByRole('link', { name: 'Français' }).click();
      await page.getByLabel('Basculer entre le mode sombre').click();
      await page.getByRole('link', { name: '3.0.0' }).click();
      //await page.getByLabel('Réduire la catégorie \'').click();
      //await page.getByLabel('Développer la catégorie \'Premiers pas\' de la barre latérale').click();
      //await page.getByLabel('Barre latérale des docs').getByRole('link', { name: 'Installation' }).click();
      //await page.getByRole('link', { name: 'Configuration', exact: true }).click();
    
      
      //const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
});