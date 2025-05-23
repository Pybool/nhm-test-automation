import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../../../support/world';

Given('I go to {string}', async function (this: CustomWorld, url: string) {
  await this.page.goto(url);
});
