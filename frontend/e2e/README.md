## E2E tests with Playwright

This document outlines the structure and local usage of the playwright within this project.

**Table of Contents**

* Purpose: #purpose
* Test Structure: #test-structure
* Writing tests: #writing-tests
* Table of Commands: #table-of-commands
* Next Steps: #next-steps

### Purpose

The test folder is dedicated to housing all E2E tests and related. By default, all tests in json-commands will run `headless` and will not work with trace neither with multiworkers ( my pc can't :c ). To store trace or videos you can check the `Playwright docs` to change the root config file

### Test Folder Structure

The test folder adheres to a clear and organized structure, promoting maintainability and scalability:

**e2e-results:** The e2e-results folder will store all the data from the last battery of tests runned, such as screenshots (in case of failing), trace (for detailed step-by-step reprodution) and more. Don't worry, she will be created every single time playwright feel the urge to store some info based on the flag settings in a test run or main root config file instructions.

### Writing tests

**Check the example above**

```
    import { test, expect } from '@playwright/test';

    test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });

```

Playwright works with Jest in background so the concept of waiting and codeblocks are quite the same. In this project we will work in the following form: 

1. ```filecontext.spec.ts```
2. ```describe block to group related tests```
3. ```test case itself```

so before you create a file, check if a block in one file matches with your test proposal.

### Table of Commands

| Command (npm run) | Description |
|---|---|
| **e2e** | **runs every {}.spec.ts files (except those with skip notation)** |
| **e2e:report** | **serve the last html report generated** |

-    `the html report will be stored in :root:/playwright-report directory`

| Flags | Description | Value |
|---|---|---|
| **--retries** | **remove or add retries for each test who fails in first case** | **number** |
| **--report** | **this run will generate a report in html (or list, dot, json, etc)** | **string**|

- `for more commands check the playwright documentation`


**Note:** This table will be populated with the actual commands and descriptions specific to your chosen testing framework and project setup.

### Next Steps

* **Expand test coverage:** Continuously add new test cases to cover all aspects of the project's functionality.
* **Integrate with CI/CD:** Integrate automated testing into your continuous integration and continuous delivery (CI/CD) pipeline for seamless testing and deployment.
* **Explore advanced testing techniques:** Consider incorporating more advanced testing techniques like end-to-end (E2E) testing or performance testing as needed.

