import assert from 'assert';
import { pinkColor, blondeColor, orangeColor, greyColor, whiteColor, niceColor, blueColor, redColor, brownColor } from './helpers/colors.js';
import { convToHex } from './helpers/convhex.js';

class MainPage {
    //Mr. Pink button in main page
    get pinkButton () { return $('.pink')}
    //Mr. Blonde button in main page
    get blondeButton () { return $('.blonde')}
    //Mr. Orange button in main page
    get orangeButton () { return $('.orange')}
    //Mr. White button in main page
    get whiteButton () { return $('.white')}
    //Mr. Grey button in main page
    get greyButton () { return $('.button-2')}
    //Mr. Blue button in main page
    get blueButton () { return $('.blue')}
    //Mr. Red button in main page
    get redButton () { return $('.red')}
    //Mr. Brown button in main page
    get brownButton () { return $('.brown')}
    //Nice Guy button in main page
    get niceButton () { return $('.button-1')}


    //Wait Mr. Pink button in main page
    async waypinkButton () {
        await this.pinkButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Pink button is not displayed in main page'})
        await this.pinkButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Pink button is not displayed in main page'})
        await expect(this.pinkButton).toHaveText('Mr. Pink', { message: 'Text in Mr. Pink button in main page is not Mr. Pink'})
        const actualColor = await convToHex(this.pinkButton);
        assert.strictEqual(actualColor, pinkColor, `Wrong color in Mr. Pink button in main page. Expected color: ${pinkColor}`);
    }
    //Click Mr. Pink button in main page
    async clickpinkButton () {
        await this.pinkButton.click()
    }
    //Wait Mr. Blonde button in main page
    async wayblondeButton () {
        await this.blondeButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Blonde button is not displayed in main page'})
        await this.blondeButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Blonde button is not displayed in main page'})
        await expect(this.blondeButton).toHaveText('Mr. Blonde', { message: 'Text in Mr. Blonde button in main page is not Mr. Blonde'})
        const actualColor = await convToHex(this.blondeButton);
        assert.strictEqual(actualColor, blondeColor, `Wrong color in Mr. Blonde button in main page. Expected color: ${blondeColor}`);
    }
    //Click Mr. Blonde button in main page
    async clickblondeButton () {
        await this.blondeButton.click()
    }
    //Wait Mr. Orange button in main page
    async wayorangeButton () {
        await this.orangeButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Orange button is not displayed in main page'})
        await this.orangeButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Orange button is not displayed in main page'})
        await expect(this.orangeButton).toHaveText('Mr. Orange', { message: 'Text in Mr. Orange button in main page is not Mr. Orange'})
        const actualColor = await convToHex(this.orangeButton);
        assert.strictEqual(actualColor, orangeColor, `Wrong color in Mr. Orange button in main page. Expected color: ${orangeColor}`);
    }
    //Click Mr. Orange button in main page
    async clickorangeButton () {
        await this.orangeButton.click()
    }
    //Wait Mr. White button in main page
    async waywhiteButton () {
        await this.whiteButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. White button is not displayed in main page'})
        await this.whiteButton.scrollIntoView()
        await this.whiteButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. White button is not displayed in main page'})
        await expect(this.whiteButton).toHaveText('Mr. White', { message: 'Text in Mr. White button in main page is not Mr. White'})
        const actualColor = await convToHex(this.whiteButton);
        assert.strictEqual(actualColor, whiteColor, `Wrong color in Mr. White button in main page. Expected color: ${whiteColor}`);
    }
    //Click Mr. White button in main page
    async clickwhiteButton () {
        await this.whiteButton.click()
    }
    //Wait Mr. Grey button in main page
    async waygreyButton () {
        await this.greyButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Grey button is not displayed in main page'})
        await this.greyButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Grey button is not displayed in main page'})
        await expect(this.greyButton).toHaveText('Mr. Grey', { message: 'Text in Mr. Grey button in main page is not Mr. Grey'})
        const actualColor = await convToHex(this.greyButton);
        assert.strictEqual(actualColor, greyColor, `Wrong color in Mr. Grey button in main page. Expected color: ${greyColor}`);
    }
    //Click Mr. Grey button in main page
    async clickgreyButton () {
        await this.greyButton.click()
    }
    //Wait Nice Guy button in main page
    async wayniceButton () {
        await this.niceButton.waitForExist({ timeout: 3000, timeoutMsg: 'Nice Guy button is not displayed in main page'})
        await this.niceButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Nice Guy button is not displayed in main page'})
        await expect(this.niceButton).toHaveText('Nice Guy', { message: 'Text in Nice Guy button in main page is not Nice Guy'})
        const actualColor = await convToHex(this.niceButton);
        assert.strictEqual(actualColor, niceColor, `Wrong color in Nice Guy button in main page. Expected color: ${niceColor}`);
    }
    //Click Nice Guy button in main page
    async clickniceButton () {
        await this.niceButton.click()
    }
    //Wait Mr. Blue button in main page
    async wayblueButton () {
        await this.blueButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Blue button is not displayed in main page'})
        await this.blueButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Blue button is not displayed in main page'})
        await expect(this.blueButton).toHaveText('Mr. Blue', { message: 'Text in Mr. Blue button in main page is not Mr. Blue'})
        const actualColor = await convToHex(this.blueButton);
        assert.strictEqual(actualColor, blueColor, `Wrong color in Mr. Blue button in main page. Expected color: ${blueColor}`);
    }
    //Click Mr. Blue button in main page
    async clickblueButton () {
        await this.blueButton.click()
    }
    //Wait Mr. Red button in main page
    async wayredButton () {
        await this.redButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Red button is not displayed in main page'})
        await this.redButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Red button is not displayed in main page'})
        await expect(this.redButton).toHaveText('Mr. Red', { message: 'Text in Mr. Red button in main page is not Mr. Red'})
        const actualColor = await convToHex(this.redButton);
        assert.strictEqual(actualColor, redColor, `Wrong color in Mr. Red button in main page. Expected color: ${redColor}`);
    }
    //Click Mr. Red button in main page
    async clickredButton () {
        await this.redButton.click()
    }
    //Wait Mr. Brown button in main page
    async waybrownButton () {
        await this.brownButton.waitForExist({ timeout: 3000, timeoutMsg: 'Mr. Brown button is not displayed in main page'})
        await this.brownButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Mr. Brown button is not displayed in main page'})
        await expect(this.brownButton).toHaveText('Mr. Brown', { message: 'Text in Mr. Brown button in main page is not Mr. Brown'})
        const actualColor = await convToHex(this.brownButton);
        assert.strictEqual(actualColor, brownColor, `Wrong color in Mr. Brown button in main page. Expected color: ${brownColor}`);
    }
    //Click Mr. Brown button in main page
    async clickbrownButton () {
        await this.brownButton.click()
    }

}

export default new MainPage ();