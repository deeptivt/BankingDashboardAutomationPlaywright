import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 40000,
  expect: { timeout: 5000 },
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    headless: true,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'https://demo.applitools.com/hackathonV2.html',
  },
});
