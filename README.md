# Playwright Demo

This project demonstrates end-to-end testing using [Playwright](https://playwright.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in a specific file:**
  ```bash
  npx playwright test tests/1_example.spec.js
  ```

- **Run tests with a specific tag:**
  ```bash
  npx playwright test --grep "@smoke"
  ```

- **Run tests in a specific browser:**
  ```bash
  npx playwright test --project=chromium
  ```

- **Show HTML test report:**
  ```bash
  npx playwright show-report
  ```

## Additional Commands

- **List all tests:**
  ```bash
  npx playwright test --list
  ```

- **Run tests headed (with browser UI):**
  ```bash
  npx playwright test --headed
  ```

## Notes

- Test files are located in the `tests/` directory.
- Reports are generated in the `playwright-report/` folder after test runs.

For more information, see the [Playwright documentation](https://playwright.dev/docs/intro).