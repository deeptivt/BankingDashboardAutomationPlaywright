export class TransactionsPage {
  constructor(public page) {}

  async filterByAmount(desc: boolean) {
    // Example: click the amount header to sort. Adjust selector per real app.
    await this.page.click('thead th[data-column="amount"]', { force: true }).catch(()=>{});
    if (desc) {
      // sometimes need a second click to toggle
      await this.page.click('thead th[data-column="amount"]', { force: true }).catch(()=>{});
    }
  }

  async downloadReport() {
    // Example uses a download button with text 'Download Report' — adjust for target app
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.click('text=Download Report').catch(()=>{})
    ]);
    return download;
  }
}
