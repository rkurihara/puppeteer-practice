'use strict';

var puppeteer = require('puppeteer');

// 引数を得る
var args = process.argv;
if (args.length < 3) {
  // 使い方を表示
  console.log("USES:");
  console.log("shot-tool URL [savepath]");
  process.exit();
}
var savepath = "screenshot.png";
var url = args[2];
if (args.length >= 4) {
  savepath = args[3];
}

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const options = {
    viewport: {
      width: 1024,
      height: 768,
    },
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36",
  };

  await page.emulate(options);
  await page.goto(url);
  await page.screenshot({
    path: savepath,
    clip: { x: 0, y: 0, width: 1024, height: 768 }
  });
  await browser.close();
})();