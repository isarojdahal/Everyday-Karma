const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.hamropatro.com/rashifal");

  const rashifal = await page.evaluate(() => {
    const aries = document.querySelector(
      "#rashifal > div:nth-child(1) > a:nth-child(1) > div > div > p"
    ).innerText;
    const taurus = document.querySelector(
      "#rashifal > div:nth-child(2) > a:nth-child(1) > div > div > p"
    ).innerText;

    return { aries, taurus };
  });

  fs.writeFile("rashifal.txt", rashifal.aries + "\n" + rashifal.taurus, (e) => {
    console.log(e);
  });
  browser.close();
})();
