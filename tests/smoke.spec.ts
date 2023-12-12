import { expect, test } from '@playwright/test'

test('smoke', async ({ page, context }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  await page.getByPlaceholder('LocalStorage').fill('Hello Local')
  await expect(page.getByPlaceholder('LocalStorage')).toHaveValue('Hello Local')

  await page.getByPlaceholder('SessionStorage').fill('Hello Session')
  await expect(page.getByPlaceholder('SessionStorage')).toHaveValue(
    'Hello Session'
  )

  await page.reload()

  await expect(page.getByPlaceholder('LocalStorage')).toHaveValue('Hello Local')
  await expect(page.getByPlaceholder('SessionStorage')).toHaveValue(
    'Hello Session'
  )

  await page.close()

  const newPage = await context.newPage()

  await newPage.goto('/')

  await expect(newPage.getByPlaceholder('LocalStorage')).toHaveValue(
    'Hello Local'
  )

  await expect(newPage.getByPlaceholder('SessionStorage')).not.toHaveValue(
    'Hello Session'
  )
})
