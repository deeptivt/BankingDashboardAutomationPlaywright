import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { TransactionsPage } from '../pages/transactionsPage';

test('User can download transaction report', async ({ page, browserName }) => {
  test.skip(browserName === 'webkit', 'Download behavior can be flaky in WebKit');

  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const transactions = new TransactionsPage(page);

  await loginPage.goto();
  await loginPage.login('username', 'password'); // use appropriate demo creds
  await dashboard.navigateToTransactions();

  const download = await transactions.downloadReport();
  const path = await download.path();
  expect(path).not.toBeNull();
});
