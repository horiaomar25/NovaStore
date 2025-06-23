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

test('All categories avaliable when clicking on the select element', async ({page}) => {
    const selectLocator = page.getByTestId('category-select');

    await expect(selectLocator).toBeVisible();

    await selectLocator.click();

    await expect(selectLocator.locator('option')).toHaveCount(7);

    const categoryOptions = await selectLocator.locator('option').allTextContents();

    expect(categoryOptions).toEqual(expect.arrayContaining(['All Categories', 'Beauty', 'Fragrances', 'Tops', 'Womens Bags', 'Womens Shoes', 'Womens Watches']))

})

/** NOTE: Playwright cannot visually interact with native select elements as it is
 * handled by the browser UI. Can programatically select an option using .selectOption()
 */
test('Navigate to another category by clicking on it and checking tags to confirm', async ({ page }) => {

  const selectLocator = page.getByTestId('category-select');

  await expect(selectLocator).toBeVisible();

  await selectLocator.selectOption("Beauty");

  await expect(page).toHaveURL('http://localhost:5173/productlist/beauty');

  const productTag = page.getByTestId('product-tag');

  await expect(productTag.first()).toContainText("beauty");

})


})

