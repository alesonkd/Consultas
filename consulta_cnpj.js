const puppeteer = require('puppeteer');

async function bot_consulta() {
  const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

   await page.setDefaultNavigationTimeout(0); 

    await page.goto('http://www.consultadividaativa.rj.gov.br/RDGWEBLNX/servlet/StartCISPage?PAGEURL=/cisnatural/NatLogon.html&xciParameters.natsession=Consulta_Debitos_DA');
    
    // await page.click("//img[@id='ICONIMG47']");
    //await page.click("[@id='ICONIMG47']");

    await page.waitForNavigation();

    await page.click("[name='CC']");

    await page.click("[value='Emitir']");

}

bot_consulta();