import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from "chai";

Given("I am on the login page", async () => {
  await browser.get('/auth');
});

When("I filled all the mandatory login form fields", async () => {
  await element(by.css('#login-email')).sendKeys('juan@gmail.com');
  await element(by.css('#login-password')).sendKeys('experimentos');
});

When("I click on the login button", async () => {
  await element(by.css('#login-btn')).click();
});

Then("I should be redirected on dashboard page", async () => {
  expect(await browser.get('/'));
});
