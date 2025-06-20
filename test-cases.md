# Test Cases - Playwright E2E Testing

## Product List Functionality

### Test Case: Dropdown initial selection showing all categories - DONE
- **Steps:**
1. Navigate to '[https:](http://localhost:3000/productlist)'
2. Check that select element is visible on the page.
3. Check that 'All Categories' is selected as current option.
EXPECTED: All Categories to be seen in dropdown menu

### Test Case: Dropdown displays list of categories
- **Steps:**
1. Navigate to '[https:](http://localhost:3000/productlist)'
2. Click dropdown
3. Check the number of the options in the select element.
4. Check that the options is equal to array provided in no particular order. To check exact order can use .toStrictEqual.
EXPECTED: Options in select to have several categories to displayed for the user to select.

### Test Case: Navigate to category as selected from the dropdown menu
- **Steps:**
1. Navigate to '[https:](http://localhost:3000/productlist)'
2. Click dropdown
3. Click on 'Beauty' category.
4. Page to navigate to /productlist/beauty
5. Make sure tag display 'beauty' is on the product card
EXPECTED: URL changed according to the category selected/ Check that the tags on the product card are that of the category.

### Test Case: Navigate to back to 'all categories' after selecting a specific category
- **Steps:**
1. Navigate to '[https:](http://localhost:3000/productlist/beauty)'
2. Click dropdown
3. Click on 'all categories'.
4. Page to navigate to back to /productlist
EXPECTED: URL changed back to /productlist