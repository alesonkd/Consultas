const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf');
    
    await page.waitForTimeout(2000);

    await page.click("[id='consultaCertidao:pessoaFisicaJuridica:1']");

    await page.waitForTimeout(2000);
    
    await page.type('[name="consultaCertidao:cpfCnpj"]', '05.423.963/0001-11');
  
    await page.click("[value='Enviar']");

}

bot_consulta();
