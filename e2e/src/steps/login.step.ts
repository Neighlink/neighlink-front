import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from "chai";

Given("I am on the login page", async () => {
  await browser.get('/auth');
});

When("I click on the login button", async () => {
  await element(by.css('#login-btn')).click();
});

Then("I should be redirected on dashboard page", async () => {
  expect(await browser.get('http://localhost:4200/'));
});
