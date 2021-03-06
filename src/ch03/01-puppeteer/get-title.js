'use strict';

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log(await page.title());
  browser.close();
})();