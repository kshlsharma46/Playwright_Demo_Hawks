import { test, expect } from '@playwright/test';
//Reference URL: https://playwright.dev/docs/test-assertions

//Explanation: 
// By default, failed assertion will terminate test execution. 
// Playwright also supports soft assertions: failed soft assertions do not terminate test execution, but mark the test as failed.

test('Hard assertion demo @hard', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Hard assertion: test will stop here if this fails
  await expect(page).toHaveTitle("NonExistentTitle"); // This will fail if the title is not "NonExistentTitle"
  // This line will only run if the above assertion passes
  expect(page.url()).toBe('https://playwright.dev/');
});

test('Soft assertion demo @soft', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Soft assertions: collect all failures and report at the end
  await expect.soft(page).toHaveTitle("NonExistentTitle"); // This will fail, but test continues
  expect(page.url()).toBe('https://playwright.dev/');   // This will pass
  // Test will report all soft assertion failures after execution
});

//commands to run:
//npx playwright test --grep "@hard" --project=chromium
//npx playwright test --grep "@soft" --project=chromium