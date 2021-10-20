const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('https://www.dividaativa.pge.sp.gov.br/sc/pages/crda/emitirCrda.jsf');
    
    await page.type('[id="emitirCrda:crdaInputCpf"]', '358.092.305-63');

   // await page.click('[id="recaptcha-anchor"]');

    await page.click("[value='Emitir']");

    await page.waitForNavigation();

}

bot_consulta();

