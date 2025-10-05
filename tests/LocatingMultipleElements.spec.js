const{test, expect}  = require('@playwright/test')

test('Locating Multiple Elements', async({page})=>{
  await page.goto('https://demoqa.com/')
  page.waitForSelector('.category-cards > div')
  const cards = await page.$$('.category-cards > div');

  for(const card of cards){
    const h5= await card.$('h5')
    const cardName=await h5.textContent();
    console.log(cardName)
    
  }


})

