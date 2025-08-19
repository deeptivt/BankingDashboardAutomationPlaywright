import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('User can log in and see recent transactions', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('username', 'password'); // Use valid credentials

  // ✅ Confirm successful login
  await expect(page.getByRole('heading', { name: /financial overview/i })).toBeVisible();

  // ✅ Check that the transactions table is visible
  const transactionsTable = page.locator('table');
  await expect(transactionsTable).toBeVisible();

  // ✅ Assert table contains at least one row
  const rows = transactionsTable.locator('tbody tr');
  const rowCount = await rows.count();
  expect(rowCount).toBeGreaterThan(0);
});
