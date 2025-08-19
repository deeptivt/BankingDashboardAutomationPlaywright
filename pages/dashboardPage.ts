import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(public page: Page) {}

  async isLoaded() {
    return await this.page.isVisible('.element-balances'); // adjust selector as needed
  }

  async navigateToTransactions() {
    await this.page.click('text=Transactions');
  }
}
