import { test, expect } from '@playwright/test'
import { PopupsPage } from '../pages/PopupsPage'
import { HomePage} from '../pages/HomePage'
import { FlightPage } from '../pages/FlightPage'
import { closeAllPopups } from '../utils'

let homePage: HomePage
let popupsPage: PopupsPage
let flightPage: FlightPage

test.only ("Searching of avia ticket", async ({ page }) => {
    homePage = new HomePage(page)
    popupsPage = new PopupsPage(page)
    flightPage = new FlightPage(page)

    await homePage.visit()
    await closeAllPopups(popupsPage)

    await flightPage.flightsPage.click()
    await closeAllPopups(popupsPage)

    await page.pause()
    await flightPage.fromField.click()
    await flightPage.departureCityInput.fill('Berlin')


    await flightPage.enterDestinationTo('Rome')
})