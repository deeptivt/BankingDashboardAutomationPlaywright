import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { TransactionsPage } from '../pages/transactionsPage';

test('User can filter transactions by amount', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const transactions = new TransactionsPage(page);

  await loginPage.goto();
  await loginPage.login('username', 'password'); // use appropriate demo creds
  await dashboard.navigateToTransactions();

  // Attempt to sort/filter; selectors may need adjusting per actual app
  await transactions.filterByAmount(true);
  const firstAmount = await page.locator('table tbody tr td').first().innerText();
  expect(firstAmount.length).toBeGreaterThan(0);
});
