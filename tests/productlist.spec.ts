import {test, expect} from '@playwright/test';

test.describe('Product List Page and Selection', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/productlist')
})

// Test for Dropdown intial selection on all categories
test('select should be showing all categories', async ({ page }) => {
  // locate the selector using test id
  const selectLocator = page.getByTestId('category-select');
  await expect(selectLocator).toBeVisible();
  const selectedOption = await selectLocator.locator('option:checked').textContent();

  expect(selectedOption).toBe('All Categories');
})


})

