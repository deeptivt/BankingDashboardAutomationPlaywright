export class DashboardPage {
  constructor(public page) {}

  async isLoaded() {
    // This checks that the account balance or a known dashboard element is visible
    return await this.page.isVisible('.element-balances'); // adjust selector as needed
  }

  async navigateToTransactions() {
    // For the sample site navigate to transactions/transactions-like section
    await this.page.click('text=Transactions');
  }
}
