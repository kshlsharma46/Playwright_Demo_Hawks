import { test, expect } from '@playwright/test';

// 1. Text selector

test('Login button using text selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('text=Login'); // Using text selector to click the button
  await expect(page).toHaveURL(/inventory/);
});

// 2. CSS selector

test('Username field using CSS selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('input#user-name', 'standard_user');
  await page.fill('input#password', 'secret_sauce');
  await page.click('#login-button'); // Using CSS selector to click the button
  await expect(page).toHaveURL(/inventory/);
});

// 3. Role selector

test('Login button using role selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click(); // Using getByRole to select the button by its accessible name
  await expect(page).toHaveURL(/inventory/);
});

// 4. XPath selector

test('Login button using XPath selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('//button[text()="Login"]'); // Using XPath selector to click the button
  await expect(page).toHaveURL(/inventory/);
});
