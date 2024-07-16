import test, { expect } from '@playwright/test';
import { Pages } from '../../pages/Pages';
import * as UiConstants from '../../utils/Web/UIConstants';
import TestData from '../../utils/Web/TestData';

let pages: Pages;

test.beforeEach(async ({ page }) => {
  pages = new Pages(page);
  // Check if the environment variable is correctly loaded
  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL is not defined');
  }
  await page.goto(process.env.BASE_URL);
});

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // Create 1st todo.
    await pages.todoappPage.addItem(UiConstants.TODO_ITEMS[0]);

    // Make sure the list only has one todo item.
    await expect(pages.todoappPage.todoTitle).toHaveText([UiConstants.TODO_ITEMS[0]]);

    // Create 2nd todo.
    await pages.todoappPage.addItem(UiConstants.TODO_ITEMS[1]);

    // Make sure the list now has two todo items.
    await expect(pages.todoappPage.todoTitle).toHaveText([
      UiConstants.TODO_ITEMS[0],
      UiConstants.TODO_ITEMS[1],
    ]);

    console.log(TestData.getTestData('test1', 'name'));
    console.log(TestData.getTestData('test1', 'email'));
  });

  test('should clear text input field when an item is added', async ({
    page,
  }) => {
    // create a new todo locator
    await pages.todoappPage.addItem(UiConstants.TODO_ITEMS[0]);

    // Check that input is empty.
    await expect(pages.todoappPage.newTodoInput).toBeEmpty();
  });
});
