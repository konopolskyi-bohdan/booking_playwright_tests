import { expect, Locator, Page } from '@playwright/test'

export class SearchResultsPage {
    readonly results: Locator
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.results = this.page.locator('[data-testid="property-card"]')
    }

    // Очікуємо, що хоча б один результат є
    async isLoaded() {
        await expect(this.results.first()).toBeVisible()
    }

    // Перевірка, що всі адреси містять певне місто (наприклад, "Kyiv")
    async expectAllAddressesContain(text: string) {
        const addresses = await this.page.locator('.address').allTextContents()
        for (const address of addresses) {
            expect(address.toLowerCase()).toContain(text.toLowerCase())
        }
    }

    // Перевірка, що всі результати містять правильну кількість дорослих
    async expectAllGuestLabelsContain(expected: string) {
        const labels = await this.page.locator('text=/\\d+ adults/i').allTextContents()
        for (const label of labels) {
            expect(label.toLowerCase()).toContain(expected.toLowerCase())
        }
    }
}