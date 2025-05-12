import { mainUrl } from "../pages/buttons/helpers/url.helpers.js";
import MainPage from "../pages/buttons/main.page.js";
import { respinkbtnUrl, 
respinkbtnCode, 
resblondebtnUrl, 
resblondebtnCode, 
resorangebtnUrl, 
resorangetnCode,
reswhitebtnUrl,
reswhitetnCode,
resbluebtnUrl,
resbluetnCode,
resgreybtnUrl,
resgreybtnCode,
resnicebtnUrl,
resnicebtnCode,
resredbtnUrl,
resredbtnCode,
resbrownbtnUrl,
resbrownbtnCode,
resbluebtnMsg } from "../pages/buttons/helpers/respdata.js";
import assert from 'assert';
import SitesPage from "../pages/buttons/sites.page.js";
import { getelText } from "../pages/buttons/helpers/gettext.js";
import axios from "axios";

describe('Check buttons cases', () => {
    it('Check buttons -> chrome browser, maximum resolution, click available buttons, check URL, status code, message in response', async () => {
        await browser.setTimeout({ implicit: 100});
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.blueButton).not.toBeExisting({ message: 'Mr. Blue button is displayed in main page'});
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        await expect(MainPage.niceButton).not.toBeExisting({ message: 'Nice Guy button is displayed in main page'});
        let lastStatus = null;
        let lastUrl = null;
        browser.on('Network.responseReceived', (params) => {
            lastStatus = params.response.status;
            lastUrl = params.response.url;
        });
        await browser.cdp('Network', 'enable');
        await MainPage.clickpinkButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Pink button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Pink button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, respinkbtnUrl, `Wrong URL in response after click Mr. Pink button in main page. Expected URL: ${respinkbtnUrl}`);
        assert.strictEqual(lastStatus.toString(), respinkbtnCode, `Wrong Status code in response after click Mr. Pink button in main page. Expected Status code: ${respinkbtnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysitepinkurlresText();
        const pinkresText = await getelText(SitesPage.sitepinkurlresText);
        console.log('Response message in response after click Mr. Pink button in main page: ', pinkresText);
        await expect(browser).toHaveUrl(respinkbtnUrl, `Wrong url in page after open URL from response after click Mr. Pink button in main page. Expected URL: ${respinkbtnUrl}`)
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await MainPage.clickblondeButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Blonde button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Blonde button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resblondebtnUrl, `Wrong URL in response after click Mr. Blonde button in main page. Expected URL: ${resblondebtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resblondebtnCode, `Wrong Status code in response after click Mr. Blonde button in main page. Expected Status code: ${resblondebtnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysiteblondeurlresText();
        const blondeesText = await getelText(SitesPage.sitepinkurlresText);
        console.log('Response message in response after click Mr. Blonde button in main page: ', blondeesText);
        await expect(browser).toHaveUrl(resblondebtnUrl, `Wrong url in page after open URL from response after click Mr. Blonde button in main page. Expected URL: ${resblondebtnUrl}`);
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await browser.execute(() => {
            const el = document.querySelector('.orange');
            if (el) el.removeAttribute('disabled');
        });
        await browser.pause(400);
        await MainPage.clickorangeButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Orange button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Orange button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resorangebtnUrl, `Wrong URL in response after click Mr. Orange button in main page. Expected URL: ${resorangebtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resorangetnCode, `Wrong Status code in response after click Mr. Orange button in main page. Expected Status code: ${resorangetnCode}`);
        await MainPage.waywhiteButton();
        await MainPage.clickwhiteButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. White button in main page: ', lastStatus);
        console.log('URL in response after click Mr. White button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, reswhitebtnUrl, `Wrong URL in response after click Mr. White button in main page. Expected URL: ${reswhitebtnUrl}`);
        assert.strictEqual(lastStatus.toString(), reswhitetnCode, `Wrong Status code in response after click Mr. White button in main page. Expected Status code: ${reswhitetnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysitewhiteurlresText();
        const whiteesText = await getelText(SitesPage.sitepinkurlresText);
        console.log('Response message in response after click Mr. White button in main page: ', whiteesText);
        await expect(browser).toHaveUrl(reswhitebtnUrl, `Wrong url in page after open URL from response after click Mr. Blonde button in main page. Expected URL: ${reswhitebtnUrl}`);
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();

    });

    it('Check buttons -> chrome browser, maximum resolution, set 1 value for isAmin key in local storage, click new buttons, check URL, status code, message in response', async () => {
        await browser.setTimeout({ implicit: 100});
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.blueButton).not.toBeExisting({ message: 'Mr. Blue button is displayed in main page'});
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        await expect(MainPage.niceButton).not.toBeExisting({ message: 'Nice Guy button is displayed in main page'});
        await browser.execute(() => {
            localStorage.setItem('isAdmin', '1');
        });
        await browser.refresh();
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayblueButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        await expect(MainPage.niceButton).not.toBeExisting({ message: 'Nice Guy button is displayed in main page'});
        let lastStatus = null;
        let lastUrl = null;
        browser.on('Network.responseReceived', (params) => {
            lastStatus = params.response.status;
            lastUrl = params.response.url;
        });
        
        await browser.cdp('Network', 'enable');
        await browser.pause(300);
        await MainPage.clickblueButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Blue button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Blue button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resbluebtnUrl, `Wrong URL in response after click Mr. Blue button in main page. Expected URL: ${resbluebtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resbluetnCode, `Wrong Status code in response after click Mr. Blue button in main page. Expected Status code: ${resbluetnCode}`);
        const response = await axios.get(lastUrl);
        console.log('Response message in response after click Mr. Blue button in main page: ', response.data.message);
        assert.strictEqual(response.data.message, resbluebtnMsg, `Wrong message in response after click Mr. Blue button in main page. Expected message: ${resbluebtnMsg}`);

    });

    it('Check buttons -> firefox browser, maximum resolution, click new buttons, check URL, status code, message in response', async () => {
        await browser.setTimeout({ implicit: 100});
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayblueButton();
        await browser.cdp('Network', 'setUserAgentOverride', {
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0'
        });
        await browser.cdp('Network', 'enable');
        await browser.refresh();
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.waygreyButton();
        await MainPage.wayblueButton();
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        await expect(MainPage.niceButton).not.toBeExisting({ message: 'Nice Guy button is displayed in main page'});
        let lastStatus = null;
        let lastUrl = null;
        browser.on('Network.responseReceived', (params) => {
            lastStatus = params.response.status;
            lastUrl = params.response.url;
        });
        await browser.cdp('Network', 'enable');
        await browser.pause(300);
        await MainPage.clickgreyButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Grey button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Grey button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resgreybtnUrl, `Wrong URL in response after click Mr. Grey button in main page. Expected URL: ${resgreybtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resgreybtnCode, `Wrong Status code in response after click Mr. Grey button in main page. Expected Status code: ${resgreybtnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysitegreyurlresText();
        const greyesText = await getelText(SitesPage.sitepinkurlresText);
        console.log('Response message in response after click Mr. Grey button in main page: ', greyesText);
        await expect(browser).toHaveUrl(resgreybtnUrl, `Wrong url in page after open URL from response after click Mr. Grey button in main page. Expected URL: ${resgreybtnUrl}`);
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
    });

    it('Check buttons -> internet explorer browser, maximum resolution, click new buttons, check URL, status code, message in response', async () => {
        await browser.setTimeout({ implicit: 100});
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.waygreyButton();
        await MainPage.wayblueButton();
        await browser.cdp('Network', 'setUserAgentOverride', {
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko'
        });
        await browser.cdp('Network', 'enable');
        await browser.refresh();
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayniceButton();
        await MainPage.wayblueButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        let lastStatus = null;
        let lastUrl = null;
        browser.on('Network.responseReceived', (params) => {
            lastStatus = params.response.status;
            lastUrl = params.response.url;
        });
        await browser.cdp('Network', 'enable');
        await browser.pause(300);
        await MainPage.clickniceButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Nice Guy button in main page: ', lastStatus);
        console.log('URL in response after click Nice Guy button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resnicebtnUrl, `Wrong URL in response after click Nice Guy button in main page. Expected URL: ${resnicebtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resnicebtnCode, `Wrong Status code in response after click Nice Guy button in main page. Expected Status code: ${resnicebtnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysiteniceurlresText();
        const niceesText = await getelText(SitesPage.sitepinkurlresText);
        console.log('Response message in response after click Nice Guy button in main page: ', niceesText);
        await expect(browser).toHaveUrl(resnicebtnUrl, `Wrong url in page after open URL from response after click Nice Guy button in main page. Expected URL: ${resnicebtnUrl}`);
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();

    });

    it('Check buttons -> change width to 999, click new buttons, check URL, status code, message in response', async () => {
        await browser.setTimeout({ implicit: 100});
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayniceButton();
        await MainPage.wayblueButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        await browser.setWindowSize(1000, 1080);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayniceButton();
        await MainPage.wayblueButton();
        await MainPage.wayredButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        let lastStatus = null;
        let lastUrl = null;
        browser.on('Network.responseReceived', (params) => {
            lastStatus = params.response.status;
            lastUrl = params.response.url;
        });
        await browser.cdp('Network', 'enable');
        await browser.pause(300);
        await MainPage.clickredButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Red button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Red button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resredbtnUrl, `Wrong URL in response after click Mr. Red button in main page. Expected URL: ${resredbtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resredbtnCode, `Wrong Status code in response after click Mr. Red button in main page. Expected Status code: ${resredbtnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysiteredurlresText();
        const redesText = await getelText(SitesPage.siteredurlresText);
        console.log('Response message in response after click Mr. Red button in main page: ', redesText);
        await expect(browser).toHaveUrl(resredbtnUrl, `Wrong url in page after open URL from response after click Mr. Red button in main page. Expected URL: ${resredbtnUrl}`);
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
    });

    it('Check buttons -> change width to 767, click new buttons, check URL, status code, message in response', async () => {
        await browser.setTimeout({ implicit: 100});
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayniceButton();
        await MainPage.wayblueButton();
        await MainPage.wayredButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.brownButton).not.toBeExisting({ message: 'Mr. Brown button is displayed in main page'});
        await browser.setWindowSize(767, 1080);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
        await expect(MainPage.orangeButton).toHaveAttribute('disabled', 'true', { message: 'Mr. Orange button is not had disabled attr with true value'});
        await MainPage.waywhiteButton();
        await MainPage.wayniceButton();
        await MainPage.wayblueButton();
        await MainPage.waybrownButton();
        await expect(MainPage.greyButton).not.toBeExisting({ message: 'Mr. Grey button is displayed in main page'});
        await expect(MainPage.redButton).not.toBeExisting({ message: 'Mr. Red button is displayed in main page'});
        let lastStatus = null;
        let lastUrl = null;
        browser.on('Network.responseReceived', (params) => {
            lastStatus = params.response.status;
            lastUrl = params.response.url;
        });
        await browser.cdp('Network', 'enable');
        await browser.pause(300);
        await MainPage.clickbrownButton();
        await browser.pause(1500);
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('Status code in response after click Mr. Brown button in main page: ', lastStatus);
        console.log('URL in response after click Mr. Brown button in main page: ', lastUrl);
        assert.strictEqual(lastUrl, resbrownbtnUrl, `Wrong URL in response after click Mr. Brown button in main page. Expected URL: ${resbrownbtnUrl}`);
        assert.strictEqual(lastStatus.toString(), resbrownbtnCode, `Wrong Status code in response after click Mr. Brown button in main page. Expected Status code: ${resbrownbtnCode}`);
        await browser.url(lastUrl);
        await browser.pause(1000);
        await SitesPage.waysitebrownurlresText();
        const brownText = await getelText(SitesPage.siteredurlresText);
        console.log('Response message in response after click Mr. Brown button in main page: ', brownText);
        await expect(browser).toHaveUrl(resbrownbtnUrl, `Wrong url in page after open URL from response after click Mr. Brown button in main page. Expected URL: ${resbrownbtnUrl}`);
        console.log('---------------------------------------------------------------------------------------------------------------');
        await browser.url(mainUrl);
        await MainPage.waypinkButton();
        await MainPage.wayblondeButton();
        await MainPage.wayorangeButton();
    });
});