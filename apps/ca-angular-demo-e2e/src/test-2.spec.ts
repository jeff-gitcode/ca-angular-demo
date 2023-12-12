import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Login' }).first().click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByPlaceholder('Enter name').click();
  await page.getByPlaceholder('Enter name').fill('jeff');
  await page.getByPlaceholder('Enter name').press('Tab');
  await page.getByPlaceholder('Enter email').fill('jeff@test.com');
  await page.getByPlaceholder('Enter email').press('Tab');
  await page.getByPlaceholder('Enter phone').fill('12345678');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('row', { name: '1 Leanne Graham Sincere@april' }).getByRole('link').click();
  await page.getByPlaceholder('Enter name').click();
  await page.getByPlaceholder('Enter name').fill('Leanne Graham update');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('row', { name: '1 Leanne Graham Sincere@april' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Logout' }).click();
});
