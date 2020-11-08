Feature: Signup

Scenario: I want to register account
  Given I am on the signup page
  When  I filled all the mandatory signup form fields
  And  I click on the signup button
  Then  I should be redirected on login page
