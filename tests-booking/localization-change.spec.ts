import { test, expect } from '@playwright/test'
import { PopupsPage } from '../page-objects/PopupsPage'
import { HomePage} from '../page-objects/HomePage'
import { LocalizationPage } from '../page-objects/LocalizationPage'

let homePage: HomePage
let popupsPage: PopupsPage
let localizationPage: LocalizationPage

test ("Localization change", async ({ page }) => {
    homePage = new HomePage(page)
    popupsPage = new PopupsPage(page)
    localizationPage = new LocalizationPage(page)

    await homePage .visit()
    await popupsPage.handleAllPopups()
    await popupsPage.closeSignInPopupIfVisible()

    await localizationPage.openLanguageMenu()
    await localizationPage.logAllLanguages()
    await localizationPage.logCurrentLanguage()
    await localizationPage.changeLanguageTo('Español')
    await popupsPage.handleAllPopups()
    await popupsPage.closeSignInPopupIfVisible()
    await localizationPage.expectLanguageChangedTo('Español')

    // перевіряємо, що мова змінилась (краще перевірити aria-label або текст)
    await expect(localizationPage.languageTrigger).toHaveAttribute('aria-label', /Español/)
    await localizationPage.expectSpanishLanguageIsActive()
})