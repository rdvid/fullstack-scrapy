import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:1234/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Market Scrappy/);
});

test('send empty request should display an error toast', async ({ page }) => {
  await page.goto('http://localhost:1234/');

  // Click the get started link.
  const searchBar = page.getByPlaceholder('Search...');
  await expect(searchBar).toBeVisible();
  const btnSearch = page.getByRole('button');

  await btnSearch.click();
  await expect(page.getByText('keyword must be provided')).toBeVisible();

  const toast = page.getByText('keyword must be provided');
  await expect(toast).toHaveClass('error');
  
});


