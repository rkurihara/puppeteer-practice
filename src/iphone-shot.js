'use strict';

var puppeteer = require('puppeteer');
const TARGET_URL = "https://google.co.jp";

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const options = {
    viewport: {
      width: 750,
      height: 1334,
    },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
  };
  await page.emulate(options);
  await page.goto(TARGET_URL);
  await page.screenshot({
    path: 'screenshot.png'
  });
  await browser.close();
})();