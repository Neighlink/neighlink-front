import { Given, Then, When } from "cucumber";
import { browser, element, by } from "protractor";
import { expect } from "chai";

Given("I am on the login view", async () => {
  await browser.get('/auth');
});

When("I click on the signup link", async () => {
  await element(by.css('#signup-link')).click();
});

Then("I should be redirected on signup view", async () => {
  expect(await browser.get('/auth/signup'));
});