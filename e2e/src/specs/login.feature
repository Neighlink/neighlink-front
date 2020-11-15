Feature: Login

Scenario: I want to login
  Given I am on the login page
  When  I filled all the mandatory login form fields
  And   I click on the login button
  Then  I should be redirected on dashboard page
