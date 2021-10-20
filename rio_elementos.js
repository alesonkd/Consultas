const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('http://www2.rio.rj.gov.br/smf/iptucecad/default.asp');
    
    await page.type('[name="inscricao"]', '111111');

    await page.click("[value='Consultar']");

    await page.waitForNavigation();

}

bot_consulta();