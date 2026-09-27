const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('response', response => {
        if (!response.ok()) {
            console.log('PAGE NETWORK ERROR:', response.url(), response.status());
        }
    });

    await page.goto('file://' + __dirname + '/index.html', { waitUntil: 'networkidle0' });
    
    const rootInfo = await page.evaluate(() => {
        const root = document.getElementById('lightfall-root');
        if (!root) return 'No root';
        const rect = root.getBoundingClientRect();
        return `Root rect: ${rect.width}x${rect.height} at ${rect.left},${rect.top}. Children: ${root.children.length}`;
    });
    console.log('Root Info:', rootInfo);

    await browser.close();
})();
