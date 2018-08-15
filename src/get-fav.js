'use strict';
var puppeteer = require('puppeteer');

var BBS_USER = "JS-TESTER";
var BBS_PASS = "ipCU12ySxI";

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto('http://uta.pw/sakusibbs/users.php?action=login');

  await page.type('input[name="username_mmlbbs6"]', BBS_USER);
  await page.type('input[name="password_mmlbbs6"]', BBS_PASS);
  const inputElement = await page.$('input[type=submit]');
  await inputElement.click();
  await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});

  const myPageUrl = await page.evaluate(() =>
    document.querySelector('#header_menu_linkbar a').href
  );
  await page.goto(myPageUrl);
  await page.screenshot({
    path: 'flicker-cat.png'
  });
  await browser.close();
})();