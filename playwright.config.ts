// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();
const GLOBAL_TIMEOUT = Number(process.env.GLOBAL_TIMEOUT!);
const TIMEOUT = GLOBAL_TIMEOUT * 1000;

export default defineConfig({
  testDir: './tests',
  timeout: GLOBAL_TIMEOUT * 1000,
  expect: { timeout: TIMEOUT },
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
