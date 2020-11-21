import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";

Given("I am on the bill page", async () => {
  await browser.get('/categories');
});

When("I click on the add bill button", async () => {
  await element(by.css('#add-category')).click();
});

When("I filled all the mandatory fields", async () => {
  await element(by.css('#category-name')).sendKeys('Recibo agua');
  await element(by.css('#category-description')).sendKeys('nov 2020');
});

Then('I am able to click on it to create', async () => {
  await element(by.css('#save-category-btn')).click();
});
