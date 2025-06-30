import { test } from '@playwright/test';

test('Log all item names on Products page @items', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // Login first
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  // Wait for navigation to products page
  await page.waitForURL('**/inventory.html');

  // Get all item names with class 'inventory_item_name'
  const itemNames = await page.locator('.inventory_item_name').allTextContents();
  //console.log('Product item names:');
  for (const name of itemNames) {
    console.log(name);
  }
});

// commands to run:
// npx playwright test --grep "@items"  --headed --project=chromium