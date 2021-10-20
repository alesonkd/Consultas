const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf');
    
    await page.type('[id="consultaCertidao:cpfCnpj"]', '358.092.305-63');
  
    await page.click("[value='Enviar']");

    await page.waitForNavigation();

}

bot_consulta();