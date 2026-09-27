const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('requestfailed', request => {
        console.log('PAGE NETWORK ERROR:', request.url(), request.failure()?.errorText);
    });

    try {
        await page.goto('file://' + __dirname + '/index.html', { waitUntil: 'domcontentloaded', timeout: 5000 });
        // wait for react to render
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
    } catch (e) {
        console.log("Navigation err", e.message);
    }
    
    const rootInfo = await page.evaluate(() => {
        const root = document.getElementById('lightfall-root');
        if (!root) return 'No root';
        const rect = root.getBoundingClientRect();
        return `Root rect: ${rect.width}x${rect.height} at ${rect.left},${rect.top}. Children: ${root.innerHTML}`;
    });
    console.log('Root Info:', rootInfo);

    await browser.close();
})();
