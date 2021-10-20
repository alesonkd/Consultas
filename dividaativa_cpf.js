const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('https://www.dividaativa.pge.sp.gov.br/sc/pages/crda/emitirCrda.jsf');
    
   var cpf(){
     return cpf.json
   }

    await page.type('[id="emitirCrda:crdaInputCpf"]', '${cpf}');

   // await page.click('[id="recaptcha-anchor"]');

    await page.click("[value='Emitir']");

    
}

bot_consulta();

