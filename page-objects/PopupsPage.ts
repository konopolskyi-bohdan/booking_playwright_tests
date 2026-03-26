import {Locator, Page} from '@playwright/test';

export class PopupsPage {
    readonly page: Page
    readonly dismissBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.dismissBtn = this.page.locator('[aria-label="Dismiss sign-in info."]')
    }

    async closeSignInPopupIfVisible() {
        const popup = this.dismissBtn.first()
        if (await popup.isVisible()) {
            console.log('Попап входу знижок з’явився — закриваємо його')
            await popup.click()
            await this.page.waitForTimeout(300) // дати трохи часу на анімацію
            await this.page.waitForSelector('[aria-label="Dismiss sign-in info."]', { state: 'detached', timeout: 5000 })
        }
    }

    async handleAllPopups() {
        await this.closeSignInPopupIfVisible()
    }
}