import { Page } from '@playwright/test'; // Only if you're using Playwright Test

export class LoginPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#log-in');
  }
}
