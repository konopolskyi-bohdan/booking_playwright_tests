import { expect, Locator, Page } from '@playwright/test'

export class CurrencyChangePage {
    readonly page: Page
    readonly currencyTrigger: Locator
    readonly currencyList: Locator
    readonly hotelCards: Locator

    constructor(page: Page) {
        this.page = page
        this.currencyTrigger = this.page.locator('[data-testid="header-currency-picker-trigger"]')
        this.currencyList = this.page.locator('.a5c71b0007')
        this.hotelCards = this.page.locator('.de576f5064.baad532480')
    }

    async expectCurrencyIs(currencyCode: string) {
        await expect(this.currencyTrigger).toHaveText(currencyCode)
    }

    async openCurrencyMenu() {
        await this.currencyTrigger.click()
        await expect(this.currencyList).toBeVisible()
    }

    async selectCurrency(currencyNameWithCode: string) {
        const currencyButton = this.page
            .getByTestId('All currencies')
            .getByRole('button', { name: currencyNameWithCode })

        await expect(currencyButton).toBeVisible()
        await currencyButton.click()
    }
    async expectPriceIsInEuro(expected: string) {
        const labels = await this.page.locator('text=€').allTextContents()
        for (const label of labels) {
            expect(label.toLowerCase()).toContain(expected.toLowerCase())
        }
    }
    async expectAllHotelsHaveEuroCurrency() {
        const count = await this.hotelCards.count()
        for (let i = 0; i < count; i++) {
            const cardText = await this.hotelCards.nth(i).textContent()
            expect(cardText?.toLowerCase()).toContain('€')
        }
    }
}