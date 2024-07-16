import { Page } from '@playwright/test';
import { TodoappPage } from './Web/TodoappPage';

export class Pages {
  get page() {
    return this.browser;
  }

  browser: Page;
  todoappPage: TodoappPage;

  constructor(page: Page) {
    this.browser = page;
    this.todoappPage = new TodoappPage(page);
  }
}
