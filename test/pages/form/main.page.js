

class MainFormPage {
    //Title in register form in main page
    get regformmainTitle () { return $('.register-form > h2')}
    //Email field in register form in main page
    get regforemailField () { return $('[type="email"]')}
    //Pass field in register form in main page
    get regforpassField () { return $('[type="password"]')}
    //Country field in register form in main page
    get regforcountryField () { return $('[name="country"]')}
    //USA country option of country list in register form in main page
    get regforcountryUSAOption () { return $('[value="USA"]')}
    //Company field in register form in main page
    get regforcompanyField () { return $('[type="text"]')}
    //Term checkbox in register form in main page
    get regfortermCheck () { return $('[type="checkbox"]')}
    //Register button in register form in main page
    get regforregButton () { return $('[type="submit"]')}
    //Msg in popup after click register button
    get regformsgPopup () { return $('.modal-box > p')}
    //Close button in popup after click register button
    get regformpopupcloseButton () { return $('.modal-box > button')}




    //Wait Title in register form in main page
    async wayregformmainTitle () {
        await this.regformmainTitle.waitForExist({ timeout: 3000, timeoutMsg: 'Title is not displayed in register form in main page'})
        await this.regformmainTitle.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Title is not displayed in register form in main page'})
        await expect(this.regformmainTitle).toHaveText('Register', { message: 'Text in Title in register form in main page is not Register'})
    }
    //Wait Email field in register form in main page
    async wayregforemailField () {
        await this.regforemailField.waitForExist({ timeout: 3000, timeoutMsg: 'Email field is not displayed in register form in main page'})
        await this.regforemailField.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Email field is not displayed in register form in main page'})
    }
    //Add data to Email field in register form in main page
    async addregforemailField (value) {
        await this.regforemailField.addValue(value)
    }
    //Wait Pass field in register form in main page
    async wayregforpassField () {
        await this.regforpassField.waitForExist({ timeout: 3000, timeoutMsg: 'Pass field is not displayed in register form in main page'})
        await this.regforpassField.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Pass field is not displayed in register form in main page'})
    }
    //Add data to Email field in register form in main page
    async addregforpassField (value) {
        await this.regforpassField.addValue(value)
    }
    //Wait and click Country field in register form in main page
    async clickregforcountryField () {
        await this.regforcountryField.waitForExist({ timeout: 3000, timeoutMsg: 'Country field is not displayed in register form in main page'})
        await this.regforcountryField.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Countrys field is not displayed in register form in main page'})
        await this.regforcountryField.click()
    }
    //Wait and click USA country option of country list in register form in main page
    async clickregforcountryUSAOption () {
        await this.regforcountryUSAOption.waitForExist({ timeout: 3000, timeoutMsg: 'USA country option is not displayed in country list in register form in main page'})
        await this.regforcountryUSAOption.waitForDisplayed({ timeout: 3000, timeoutMsg: 'USA country option is not displayed in country list in register form in main page'})
        await expect(this.regforcountryUSAOption).toHaveText('USA', { message: 'Text in USA country option in country list in register form in main page is not USA'})
        await this.regforcountryUSAOption.click()
    }
    //Wait Company field in register form in main page
    async wayregforcompanyField () {
        await this.regforcompanyField.waitForExist({ timeout: 3000, timeoutMsg: 'Company field is not displayed in register form in main page'})
        await this.regforcompanyField.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Company field is not displayed in register form in main page'})
    }
    //Add data to Company field in register form in main page
    async addregforcompanyField (value) {
        await this.regforcompanyField.addValue(value)
    }
    //Wait and click Term checkbox in register form in main page
    async clickregfortermCheck () {
        await this.regfortermCheck.waitForExist({ timeout: 3000, timeoutMsg: 'Term checkbox is not displayed in register form in main page'})
        await this.regfortermCheck.click()
    }
    //Wait and click Register button in register form in main page
    async clickregforregButton () {
        await this.regforregButton.waitForExist({ timeout: 3000, timeoutMsg: 'Register button is not displayed in register form in main page'})
        await this.regforregButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Register button is not displayed in register form in main page'})
        await expect(this.regforregButton).toHaveText('Register', { message: 'Text in Register button in register form in main page is not Register'})
        await this.regforregButton.click()
    }
    //Wait Msg in popup after click register button
    async wayregformsgPopup (textmsg) {
        await this.regformsgPopup.waitForExist({ timeout: 3000, timeoutMsg: 'Msg is not displayed in popup after click register button'})
        await this.regformsgPopup.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Msg is not displayed in popup after click register button'})
        await expect(this.regformsgPopup).toHaveText(textmsg, { message: `Text in Msg in popup after click register button is not ${textmsg}`})
    }
    //Wait and click Close button in popup after click register button
    async clickregformpopupcloseButton () {
        await this.regformpopupcloseButton.waitForExist({ timeout: 3000, timeoutMsg: 'Close button is not displayed in popup after click register button'})
        await this.regformpopupcloseButton.waitForDisplayed({ timeout: 3000, timeoutMsg: 'Close button is not displayed in popup after click register button'})
        await expect(this.regformpopupcloseButton).toHaveText('Close', { message: 'Text in Close button in popup after click register button is not Close'})
        await this.regformpopupcloseButton.click()
    }

}

export default new MainFormPage ();