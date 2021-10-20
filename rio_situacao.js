const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('http://www2.rio.rj.gov.br/smf/siam2/situacaofiscal.asp');
    
    await page.type('[name="inscricao"]', '111111');

    //await page.waitForTimeout(3000);

    await page.click("[value='Consultar']");

}

bot_consulta();