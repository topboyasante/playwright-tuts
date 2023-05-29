import {test,expect} from '@playwright/test'

test("test1",async({page})=>{

    //Go to the webpage you're testing:
    await page.goto("https://playwright.dev")

    // Click the get started link using Locators
    await page.getByRole('link', { name: 'Get started' }).click();

})