import { test, expect } from '@playwright/test';

test('Login with valid credentials @loginFail', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Enter 'standard_user' in the username field
  page.fill('#user-name', 'standard_user');

  // Enter 'secret_sauce' in the password field
  page.fill('#password', 'secret_sauce');

  // Click the Login button
  page.click('#login-button');

  // Optionally, verify successful login by checking for a page element
  expect(page).toHaveURL(/inventory/);
});

test('Login with valid credentials @loginPass', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Enter 'standard_user' in the username field
  await page.fill('#user-name', 'standard_user');

  // Enter 'secret_sauce' in the password field
  await page.fill('#password', 'secret_sauce');

  // Click the Login button
  await page.click('#login-button');

  // Optionally, verify successful login by checking for a page element
  await expect(page).toHaveURL(/inventory/);
});