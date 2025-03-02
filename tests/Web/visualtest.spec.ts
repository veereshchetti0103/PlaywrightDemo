import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Check if the environment variable is correctly loaded
    if (!process.env.VISUAL_TEST_BASE_URL) {
        throw new Error('VISUAL_TEST_BASE_URL is not defined');
    }
    await page.goto(process.env.VISUAL_TEST_BASE_URL);
});


test.only('home page visual test', async ({ page }) => {
    await expect(page).toHaveScreenshot();
});