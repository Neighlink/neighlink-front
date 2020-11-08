import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from "chai";

Given("I am on the signup page", async () => {
  await browser.get('/auth/signup');
});

When("I filled all the mandatory signup form fields", async () => {
  await element(by.css('#signup-name')).sendKeys('Juan');
  await element(by.css('#signup-lastName')).sendKeys('Flores');
  await element(by.css('#signup-birthDate')).sendKeys(Date());
  await element(by.css('#signup-gender')).sendKeys('1');
  await element(by.css('#signup-phone')).sendKeys('999888999');
  await element(by.css('#signup-email')).sendKeys('juan@gmail.com');
  await element(by.css('#signup-password')).sendKeys('experimentos');
});

When("I click on the signup button", async () => {
  await element(by.css('#signup-btn')).click();
});

Then("I should be redirected on login page", async () => {
  expect(await browser.get('/auth'));
});
