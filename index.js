const puppeteer = require('puppeteer');

//Função auto Executavel devido o ()();
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.artstation.com/cristib');
  await page.screenshot({path: 'artstation.png'});

  await browser.close();
})();