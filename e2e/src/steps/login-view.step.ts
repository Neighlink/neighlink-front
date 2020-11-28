import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from "chai";

Given("I am on the signup view", async () => {
  await browser.get('/auth/signup');
});

When("I click on the login link", async () => {
  await element(by.css('#login-link')).click();
});

Then("I should be redirected on login view", async () => {
  expect(await browser.get('/auth'));
});