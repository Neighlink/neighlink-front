import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from "chai";

Given("I am on the signup page", async () => {
  await browser.get('/auth/signup');
});

When("I click on the signup button", async () => {
  await element(by.css('#signup-btn')).click();
});

Then("I should be redirected on login page", async () => {
  expect(await browser.get('http://localhost:4200/auth'));
});
