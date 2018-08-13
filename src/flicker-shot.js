'use strict';

var puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const options = {
    viewport: {
      width: 1400,
      height: 800,
    },
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36",
  };
  var text = encodeURIComponent("ネコ");
  await page.emulate(options);
  await page.goto('https://www.flickr.com/search/?text=' + text);
  await page.screenshot({
    path: 'flicker-cat.png',
    clip: { x: 0, y: 0, width: 1400, height: 800 }
  });
  await browser.close();
})();