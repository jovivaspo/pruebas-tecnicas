// @ts-check
import { test, expect } from '@playwright/test'

const URL = 'http://localhost:5173/'

test('has fact cat', async ({ page }) => {
  await page.goto(URL)

  const fact = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await fact.textContent()
  const src = await image.getAttribute('src')

  await expect(textContent?.length > 0).toBeTruthy()
  await expect(src?.includes('giphy')).toBeTruthy()
})

test('has fact cat using class', async ({ page }) => {
  await page.goto(URL)

  const fact = await page.locator('.col-title > p')
  const image = await page.locator('.col-img > img')

  const textContent = await fact.textContent()
  const src = await image.getAttribute('src')

  console.log(textContent)

  await expect(textContent?.length > 0).toBeTruthy()
  await expect(src?.includes('giphy')).toBeTruthy()
})
