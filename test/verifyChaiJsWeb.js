//necessário configurar o wdio.config.js

describe('Verify whether chaijs.com links on ' +
    'home page works correctly', () => {

    it('User should be able to launch home page ' +
        'of chaijs.com', () => {
        browser.url('https://www.chaijs.com');
        const title = browser.getTitle();
        browser.pause(1000);
        assert(title === 'Chai', "title is not Chai");
    });

    it('User should be able to navigate to ' +
        'Guide Page of chaijs.com', () => {
        browser.url('https://www.chaijs.com');
        const element = $('//*[@href="/guide"]');
        element.click();
        browser.pause(5000);
        const title = browser.getTitle();
        assert(title === 'Getting Started Guide - ' +
           'Chai', "title is not 'Getting Started Guide - Chai'");
    });

    it('User should be able to navigate to ' +
        'API Page of chaijs.com', () => {
        browser.url('https://www.chaijs.com');
        const element = $('//*[@href="/api"]');
        element.click();
        browser.pause(5000);
        const title = browser.getTitle();
        assert(title === 'Introduction - Chai',
            "title is not 'Introduction - Chai'");
    });

});