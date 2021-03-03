const puppeteer = require('puppeteer');
const {
    generateText,
    createElement,
    validateInput,
    checkAndGenerate,
} = require('../src/util');

test('Should output name and age', () => {
    const text = generateText('Stas', 39);
    expect(text).toBe('Stas (39 years old)');
    expect(generateText('Anna', 28)).toBe(
        'Anna (28 years old)'
    );
});

test('should output data-less text', () => {
    expect(generateText('', null)).toBe(
        ' (null years old)'
    );
});

test('shoud return valid name and age string', () => {
    expect(checkAndGenerate('Max', 29)).toBe(
        'Max (29 years old)'
    );
});

test('should create an element with text and correct', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(
        'file:///Users/mac/_projects/webpack-sample/src/index.html'
    );
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');

    const finalText = await page.$eval(
        '.user-item',
        (el) => el.textContent
    );
    expect(finalText).toBe('Anna (28 years old)');
}, 10000);
