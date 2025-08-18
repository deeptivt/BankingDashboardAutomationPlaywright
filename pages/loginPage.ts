export class LoginPage {
  constructor(public page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    // The demo site uses specific selectors - adjust if you change the target site
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#log-in');
  }
}
