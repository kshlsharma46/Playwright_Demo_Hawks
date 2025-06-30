import { test, expect } from '@playwright/test';

test.describe('feature1', {
  tag: '@feature1',
}, () => {
  test('test report header @smoke', async ({ page }) => {
    // ...
  });

  test('test full report', {
    tag: ['@regression', '@2025.3'], // Multiple tags
  }, async ({ page }) => {
    // ...
  });
});

//commands to run:
//npx playwright test --grep "@feature"
//npx playwright test --grep "@smoke"
//npx playwright test --grep "@smoke" --grep "@regression"
//npx playwright test --grep "@feature1" --grep "@2025.3" --project=chromium
//npx playwright test --grep "@feature1" --grep "@smoke" --project=chromium --headed
//npx playwright test --grep "@smoke|@regression" --project=chromium