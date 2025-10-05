const{test, expect}  = require('@playwright/test')
test('Locator Practice', async({page})=>{
     await page.goto('https://demoqa.com/alerts')
     console.log("clickig alert button..")

     await page.click('#alertButton')
     //await page.locator('#alertButton').click();
     await page.waitForTimeout(1000);

     await page.click("//button[@id='timerAlertButton']")
     await page.waitForTimeout(1000)

     await page.click("//body/div[@id='app']/div[@class='body-height']/div[@class='container playgound-body']/div[@class='row']/div[1]/div[1]/div[1]/div[2]/span[1]/div[1]")
     await page.waitForTimeout(1000)

    await page.click("//span[normalize-space()='Practice Form']")
    await page.waitForTimeout(1000)

    await page.fill('#firstName','Sanzida')
    await page.waitForTimeout(1000)
    await page.fill('#lastName', 'Nitu')
    await page.waitForTimeout(1000)
    await page.fill('#userEmail', 'sanzida@gmail.com')
    await page.click("label[for='gender-radio-2']");
    await page.waitForTimeout(1000)
    await page.fill('#userNumber', '0183232')
    await page.waitForTimeout(1000)
    await page.fill('#dateOfBirthInput', '05 Oct 1995');
    await page.waitForTimeout(1000)








})