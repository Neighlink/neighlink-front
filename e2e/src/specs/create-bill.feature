Feature: Create bill

Scenario: I want to create a bill
  Given I am on the bill page
  When  I click on the add bill button
  And   I filled all the mandatory fields
  Then  I am able to click on it to create
