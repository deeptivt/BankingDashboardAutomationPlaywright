import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login('username', 'password'); // replace with demo credentials if needed
  await expect(await dashboard.isLoaded()).toBeTruthy();
});
