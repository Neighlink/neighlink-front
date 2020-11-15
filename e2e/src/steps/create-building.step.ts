import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";

Given("I am on the building page", async () => {
  await browser.get('/buildings');
});

When("I click on the add building button", async () => {
  await element(by.css('#add-building')).click();
});

When("I filled all the mandatory building form fields", async () => {
  await element(by.css('#building-name')).sendKeys('Edificio ADA');
});

Then('I am able to click on it to create building', async () => {
  await element(by.css('#save-building-btn')).click();
});
