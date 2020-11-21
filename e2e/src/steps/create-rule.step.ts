import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";

Given("I am on the rule page", async () => {
  await browser.get('/dashboard');
});

When("I click on the add rule button", async () => {
  await element(by.css('#add-rule')).click();
});

When("I filled all the mandatory rule form fields", async () => {
  await element(by.css('#rule-name')).sendKeys('Regla 1');
  await element(by.css('#rule-description')).sendKeys('Descripcion!');
});

Then('I am able to click on it to create rule', async () => {
  await element(by.css('#save-rule-btn')).click();
});