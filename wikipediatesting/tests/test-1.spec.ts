import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bingwa.ke/');

  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Setup your line of business').click();
  const page1 = await page1Promise;
  await page1.goto('https://partner.bingwa.ke/');
  await page.getByRole('link', { name: 'Basic Cleaning Services' }).first().click();
  await page.locator('app-service-detail ion-grid').getByText('Book now').click();
  await page.getByPlaceholder('Choose a location').click();
  await page.getByPlaceholder('Enter an address (E.g.:').click();
  await page.locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).nth(1).click();
  await page.getByRole('banner').getByRole('button').click();
  await page.locator('ion-row:nth-child(2) > ion-col > ion-card > ion-row:nth-child(2) > .ion-no-margin > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click();
  await page.getByLabel('Wednesday, February 21').click();
  await page.getByLabel('Wednesday, February 21').press('Enter');
  await page.getByLabel('Thursday, February 22').click();
  await page.getByLabel('Thursday, February 22').click();
  await page.getByRole('banner').getByRole('button').click();
  await page.getByRole('button', { name: 'Edit Details' }).click();
});