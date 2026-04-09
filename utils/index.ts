import { Page } from '@playwright/test'
import { PopupsPage } from '../pages/PopupsPage'

export async function closeAllPopups(popupsPage: PopupsPage): Promise<void> {
    await popupsPage.handleAllPopups()
    await popupsPage.closeSignInPopupIfVisible()
}

export async function waitForPageReady(page: Page): Promise<void> {
    await page.waitForLoadState('domcontentloaded')
}
