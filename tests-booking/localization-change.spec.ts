import { test, expect } from '@playwright/test'
import { PopupsPage } from '../pages/PopupsPage'
import { HomePage} from '../pages/HomePage'
import { LocalizationPage } from '../pages/LocalizationPage'
import { closeAllPopups } from '../utils'

let homePage: HomePage
let popupsPage: PopupsPage
let localizationPage: LocalizationPage

test ("Localization change", async ({ page }) => {
    homePage = new HomePage(page)
    popupsPage = new PopupsPage(page)
    localizationPage = new LocalizationPage(page)

    await homePage .visit()
    await closeAllPopups(popupsPage)

    await localizationPage.openLanguageMenu()
    await localizationPage.logAllLanguages()
    await localizationPage.logCurrentLanguage()
    await localizationPage.changeLanguageTo('Español')
    await closeAllPopups(popupsPage)
    await localizationPage.expectLanguageChangedTo('Español')

    // перевіряємо, що мова змінилась (краще перевірити aria-label або текст)
    await expect(localizationPage.languageTrigger).toHaveAttribute('aria-label', /Español/)
    await localizationPage.expectSpanishLanguageIsActive()
})