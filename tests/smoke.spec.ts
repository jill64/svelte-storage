import { expect, test } from '@playwright/test'

test('smoke', async ({ page, context }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()
  await page.getByRole('textbox').fill('Hello World')
  await expect(page.getByRole('textbox')).toHaveValue('Hello World')

  await page.reload()

  await page.getByRole('textbox').fill('Hello World')

  await page.close()

  const newPage = await context.newPage()

  await newPage.goto('/')

  await expect(newPage.getByRole('textbox')).toHaveValue('Hello World')
})
