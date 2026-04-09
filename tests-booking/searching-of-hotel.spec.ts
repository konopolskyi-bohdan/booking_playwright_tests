import { test, expect } from '@playwright/test'
import { PopupsPage } from '../pages/PopupsPage'
import { HomePage} from '../pages/HomePage'
import { SearchResultsPage } from '../pages/SearchResultsPage'
import { closeAllPopups } from '../utils'

let homePage: HomePage
let popupsPage: PopupsPage
let searchResultsPage: SearchResultsPage

test ("Searshing of a hotel on Booking.com", async ({ page }) => {
    homePage = new HomePage(page)
    popupsPage = new PopupsPage(page)
    searchResultsPage = new SearchResultsPage(page)
    const resultsPage = new SearchResultsPage(page)

    await homePage.visit()
    await closeAllPopups(popupsPage)

    await homePage.enterDestination('Kyiv')
    await homePage.selectDates('2025-07-01', '2025-08-01')
    await homePage.clickOnSearchButton()

    await closeAllPopups(popupsPage)
    await resultsPage.isLoaded()
    await resultsPage.expectAllAddressesContain('Kyiv')
    await resultsPage.expectAllGuestLabelsContain('2 adults')
})

