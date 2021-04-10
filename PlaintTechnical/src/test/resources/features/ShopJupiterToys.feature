@JupiterToys
Feature: User can add the product to cart successfully

  Background:
    Given I am on Jupiter toys Home Page

  Scenario: To verify I should be able to navigate to Contact page successfully
    When I click on contact
    Then I am able to navigate to contact page successfully

  @ErrorValidation
  Scenario Outline: All mandatory field error validation for Jupiter Toys Contact page
    When I click on contact
    And I am able to navigate to contact page successfully
    And I click on submit button
    Then I should get forename mandatory field error message on screen as "<ReceiveMessage1>"
    And I should get email mandatory field error message on screen as "<ReceiveMessage2>"
    And I should get Message mandatory field error message on screen as "<ReceiveMessage3>"
    But I enter forename "<ForeName>"
    And I enter email "<Email>"
    And I enter message "<Message>"
    Then I should be able to verify all mandatory field errors are gone


    Examples:
      | ForeName | Email        | Message   | ReceiveMessage1      | ReceiveMessage2   | ReceiveMessage3     |
      | Sam      | ABC@test.com | Hello Sam | Forename is required | Email is required | Message is required |

  @FeeBackValidation
  Scenario Outline: I should be able to send FeedBack message successfully,
    When I click on contact
    And I am able to navigate to contact page successfully
    And I enter forename "<ForeName>"
    And I enter email "<Email>"
    And I enter message "<Message>"
    And I click on submit button
    Then I should be able to validate Message successfully

    Examples:
      | ForeName | Email          | Message    |
      | John     | John@gmail.com | Hello John |


    Scenario: To verify I am able to add product to cart
      When I click on shop
      And I am able to navigate to shop page successfully
      And I can click buy button two times on Funny Cow product
      And I can click buy button one times on Fluffy Bunny product
      And I can click on cart menu
      Then I am able to verify items are in the cart
