import { test, expect } from '@playwright/test'
import { PopupsPage } from '../page-objects/PopupsPage'
import { HomePage} from '../page-objects/HomePage'
import { FlightPage } from '../page-objects/FlightPage'

let homePage: HomePage
let popupsPage: PopupsPage
let flightPage: FlightPage

test.only ("Searching of avia ticket", async ({ page }) => {
    homePage = new HomePage(page)
    popupsPage = new PopupsPage(page)
    flightPage = new FlightPage(page)

    await homePage.visit()
    await popupsPage.handleAllPopups()
    await popupsPage.closeSignInPopupIfVisible()

    await flightPage.flightsPage.click()
    await popupsPage.handleAllPopups()
    await popupsPage.closeSignInPopupIfVisible()

    await page.pause()
    await flightPage.fromField.click()
    await flightPage.departureCityInput.fill('Berlin')


    await flightPage.enterDestinationTo('Rome')
})