import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";

Given("I am on the news page", async () => {
  await browser.get('/dashboard');
});

When("I click on the add new button", async () => {
  await element(by.css('#add-news')).click();
});

When("I filled all the mandatory new form fields", async () => {
  await element(by.css('#news-name')).sendKeys('AVISO!');
  await element(by.css('#news-description')).sendKeys('Descripcion');
});

Then('I am able to click on it to create new', async () => {
  await element(by.css('#save-news-btn')).click();
});
