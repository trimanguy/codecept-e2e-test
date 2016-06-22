Feature('Google');

Scenario('do google search', (I) => {
    I.amOnPage('https://google.com');
    within('form#tsf', () => {
        I.fillField('q', 'tesseract');
        I.pressKey('Enter');
    });
    I.waitForElement('#res > div > div', 30); //secs
    I.see('Tesseract - Wikipedia, the free encyclopedia', '#res');
    I.waitForElement('a[data-href="https://en.wikipedia.org/wiki/Tesseract"]', 30);
    I.click('a[data-href="https://en.wikipedia.org/wiki/Tesseract"]');
});

