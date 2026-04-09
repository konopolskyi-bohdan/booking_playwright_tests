import { Locator, Page } from '@playwright/test'

export class FlightPage {
    readonly page: Page
    readonly flightsPage: Locator
    readonly fromField: Locator
    readonly departureCityInput: Locator

    constructor(page: Page) {
        this.page = page
        this.flightsPage = page.locator('#flights')
        this.fromField = page.locator('.ShellButton-module__contentInner___SbZm6')
        this.departureCityInput = page.getByText('Kiev')
    }

    async clickOnFlightsButton() {
        await this.flightsPage.click()
    }

async enterDestinationFrom(city: string) {
    await this.fromField.click()
    await this.departureCityInput.fill(city)

}
async enterDestinationTo(city: string) {
        await this.page.locator('.ShellButton-module__btn___lMwQM').fill(city)
    }


async selectDates(checkIn: string, checkOut: string) {
    await this.page.locator('.Calendar-module__dates___w+lwc').click()
    await this.page.locator('.calendar_cell_2025-07-12').click()


}
    //   копія


    async selectDates(checkIn: string, checkOut: string) {
        await this.page.locator('[data-testid="date-display-field-start"]').click()
        await this.page.locator(`[data-date="${checkIn}"]`).click()

        await this.page.locator('[data-testid="date-display-field-end"]').click()
        await this.page.locator(`[data-date="${checkOut}"]`).click()
    }
    async clickOnSearchButton() {
        await this.searchButton.click ()
    }
}
