import { respinkbtnMsg, resblondebtnMsg, reswhitebtnMsg, resgreybtnMsg, resnicebtnMsg, resredbtnMsg, resbrownbtnMsg } from "./helpers/respdata.js"

class SitesPages {
    //Text in site after open url in response after click button in main page
    get sitepinkurlresText () { return $('body')}
    //Text in site after open url in response after click Mr. Red or Mr. Brown button in main page
    get siteredurlresText () { return $('pre')}



    //Wait Text in site after open url in response after click Mr. Pink button in main page
    async waysitepinkurlresText () {
            await this.sitepinkurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Pink button in main page'})
            await this.sitepinkurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Pink button in main page'})
            await expect(this.sitepinkurlresText).toHaveText(respinkbtnMsg, { message: 'Text in Text displayed in site after open url in response after click Mr. Pink button in main page is not Not authorized! Invalid token!'})
    }
    //Wait Text in site after open url in response after click Mr. Blonde button in main page
    async waysiteblondeurlresText () {
            await this.sitepinkurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Blonde button in main page'})
            await this.sitepinkurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Blonde button in main page'})
            await expect(this.sitepinkurlresText).toHaveText(resblondebtnMsg, { message: 'Text in Text displayed in site after open url in response after click Mr. Blonde button in main page is not What?'})
    }
    //Wait Text in site after open url in response after click Mr. White button in main page
    async waysitewhiteurlresText () {
            await this.sitepinkurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. White button in main page'})
            await this.sitepinkurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. White button in main page'})
            await expect(this.sitepinkurlresText).toHaveText(reswhitebtnMsg, { message: 'Text in Text displayed in site after open url in response after click Mr. White button in main page is not Not found!'})
    }
    //Wait Text in site after open url in response after click Mr. Grey button in main page
    async waysitegreyurlresText () {
            await this.sitepinkurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Grey button in main page'})
            await this.sitepinkurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Grey button in main page'})
            await expect(this.sitepinkurlresText).toHaveText(resgreybtnMsg, { message: "Text in Text displayed in site after open url in response after click Mr. Grey button in main page is not You've broken our server, shame on you!"})
    }
    //Wait Text in site after open url in response after click Nice Guy button in main page
    async waysiteniceurlresText () {
            await this.sitepinkurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Nice Guy button in main page'})
            await this.sitepinkurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Nice Guy button in main page'})
            await expect(this.sitepinkurlresText).toHaveText(resnicebtnMsg, { message: "Text in Text displayed in site after open url in response after click Nice Guy button in main page is not I'm a teapot, don't ask me for coffee!"})
    }
    //Wait Text in site after open url in response after click Mr. Red button in main page
    async waysiteredurlresText () {
            await this.siteredurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Red button in main page'})
            await this.siteredurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Red button in main page'})
            await expect(this.siteredurlresText).toHaveText(resredbtnMsg, { message: 'Text in Text displayed in site after open url in response after click Mr. Red button in main page is not {"action":"Look to right, look to the left. Do you see? Me neither."}'})
    }
    //Wait Text in site after open url in response after click Mr. Brown button in main page
    async waysitebrownurlresText () {
            await this.siteredurlresText.waitForExist({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Brown button in main page'})
            await this.siteredurlresText.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Text is not displayed in site after open url in response after click Mr. Brown button in main page'})
            await expect(this.siteredurlresText).toHaveText(resbrownbtnMsg, { message: 'Text in Text displayed in site after open url in response after click Mr. Brown button in main page is not {"message":"Gimme some money!"}'})
    }
    



}

export default new SitesPages ();