const {test, expect} = require('@playwright/test')


test.describe('Practice Form Fillup', ()=>{

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });
test('Built-In Locator', async({page})=>{
    await page.getByPlaceholder('First Name').fill('Sanzida')
    await page.getByPlaceholder('Last Name').fill('Nitu')
    await page.getByPlaceholder('name@example.com').fill('sanzida@gmail.com')
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    //capture logo
    const img= await page.locator("a[href='https://demoqa.com'] img")
    await expect(img).toBeVisible();
    await page.waitForTimeout(1000)
})


test('For Click Button ', async({page})=>{
    await page.getByRole('button',{type:'submit'}).click()


} )

})