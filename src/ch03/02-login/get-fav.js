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
  await page.waitForNavigation({ timeout: 60000, waitUntil: "domcontentloaded" });

  const myPageUrl = await page.evaluate(() =>
    document.querySelector('#header_menu_linkbar a').href
  );
  await page.goto(myPageUrl);

  const res = await page.evaluate(() => {
    var tmp = [];
    var q = document.querySelectorAll('#favlist li > a');
    for (var i = 0; i < q.length; i++) {
      var text = q[i].textContent;
      q[i].href;
      tmp.push(text);
    }
    return tmp;
  });
  console.log("--- favlist ---");
  for (var i = 0; i < res.length; i++) {
    console.log("- " + res[i]);
  }
  await browser.close();
})();