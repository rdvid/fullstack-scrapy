import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:1234/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Market Scrappy/);
});

test('send empty request should display an error toast', async ({ page }) => {
  // all requests made to url above will be solved and returned the mocked value
  await page.route('http://localhost:8000/api/scrape?keyword=', (route) => {
        route.fulfill({
            status: 400,
            body: JSON.stringify({ "message": "keyword must be provided" }),
        });
    });

  // go to home
  await page.goto('http://localhost:1234/');  

  // evaluate search bar render and send a empty request
  const searchBar = page.getByPlaceholder('Search...');
  await expect(searchBar).toBeVisible();
  const btnSearch = page.getByRole('button');
  await btnSearch.click();

  // notify toast must appear and const CSS classes toast, show and error
  await expect(page.getByText('keyword must be provided')).toBeVisible();
  const toast = page.getByText('keyword must be provided');
  await expect(toast).toHaveClass('toast show error');
  
});


