const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch();

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://google.com');

    await page.screenshot({ path: `todo.png` });

    await browser.close();
})();
