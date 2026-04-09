import { test, expect } from '@playwright/test'
import { PopupsPage } from '../pages/PopupsPage'
import { HomePage} from '../pages/HomePage'
import { CurrencyChangePage } from '../pages/CurrencyChangePage'
import { closeAllPopups } from '../utils'

let homePage: HomePage
let popupsPage: PopupsPage
let currencyChangePage: CurrencyChangePage

test("Currency change", async ({page}) => {
        homePage = new HomePage(page)
        popupsPage = new PopupsPage(page)
        currencyChangePage = new CurrencyChangePage(page)

        await homePage.visit()
        await closeAllPopups(popupsPage)

        const currencySelector = new CurrencyChangePage(page)

        await currencySelector.expectCurrencyIs('UAH')
        await currencySelector.openCurrencyMenu()
        await currencySelector.selectCurrency('Euro EUR')
        await currencySelector.expectCurrencyIs('EUR')

        await currencyChangePage.expectAllHotelsHaveEuroCurrency()
        })