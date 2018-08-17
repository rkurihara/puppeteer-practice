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

  await page.goto('http://uta.pw/sakusibbs/users.php?user_id=485');

  const links = await page.evaluate(() => {
    var tmp = [];
    var list = document.querySelectorAll('ul#mmlist a');
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (a.href.indexOf('post.php') > 0) {
        tmp.push(a.href);
      }
    }
    return tmp;
  });

  console.log(links);

  for (let link of links) {
    await page.goto(link);
    if (await page.$('#fav_add_btn') !== null) {
      await page.click('#fav_add_btn');
      console.log('- click:' + link);
    } else {
      console.log('- already:' + link);
    }
  };

  console.log("--- ok ---");

  await browser.close();
})();