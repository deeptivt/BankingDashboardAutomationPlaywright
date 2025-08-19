import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

test('User can log in successfully and view the Compare Expenses chart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login('username', 'password'); // Replace with actual working credentials

  // ✅ Wait until dashboard is fully loaded before continuing
  await expect(page.locator('.element-balances')).toBeVisible();

  // ✅ Now the chart button should be present
  const chartButton = page.locator('#showExpensesChart');
  await expect(chartButton).toBeVisible();
  await chartButton.click();

  const chartCanvas = page.locator('#canvas');
  await expect(chartCanvas).toBeVisible();

  const nextYearButton = page.getByText('Show data for next year', { exact: false });
  await expect(nextYearButton).toBeVisible();
  await nextYearButton.click();

  await expect(chartCanvas).toBeVisible(); // Ensure chart remains visible
});
