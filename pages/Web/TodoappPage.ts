import { Locator, Page } from '@playwright/test';

export class TodoappPage {
  page: Page;
  readonly newTodoInput: Locator;
  readonly todoTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = this.page.getByPlaceholder('What needs to be done?');
    this.todoTitle = this.page.getByTestId('todo-title');
  }

  async addItem(item: string) {
    await this.newTodoInput.fill(item);
    await this.newTodoInput.press('Enter');
  }
}
