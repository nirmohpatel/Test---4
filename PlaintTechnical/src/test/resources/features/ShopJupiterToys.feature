@JupiterToys
Feature: User can add the product to cart successfully

  Background:
    Given I am on Jupiter toys Home Page

  #@ErrorValidation  @TestCase1
  #Scenario Outline: All mandatory field error validation for Jupiter Toys Contact page
  #  When I click on contact
  #  And I am able to navigate to contact page successfully
  #  And I click on submit button
  #  Then I should get forename mandatory field error message on screen as "<ReceiveMessage1>"
  #  And I should get email mandatory field error message on screen as "<ReceiveMessage2>"
  #  And I should get Message mandatory field error message on screen as "<ReceiveMessage3>"
  #  But I enter forename "<ForeName>"
  #  And I enter email "<Email>"
  #  And I enter message "<Message>"
  #  Then I should be able to verify all mandatory field errors are gone
  #  Examples:
  #    | ForeName | Email        | Message   | ReceiveMessage1      | ReceiveMessage2   | ReceiveMessage3     |
  #    | Sam      | ABC@test.com | Hello Sam | Forename is required | Email is required | Message is required |

  @FeeBackValidation    @TestCase2
  Scenario Outline: I should be able to submit FeedBack successfully,
  So, I can see feedback successfully submitted message
    When I click on contact
    And I am able to navigate to contact page successfully
    And I enter forename "<ForeName>"
    And I enter email "<Email>"
    And I enter message "<Message>"
    And I click on submit button
    Then I should be able to verify feedback successfully submitted message "<submittedMessage>"

    Examples:
      | ForeName | Email               | Message      | submittedMessage                            |
      | John     | John@test.com       | Hello John   | Thanks John, we appreciate your feedback.   |
      | Shone    | 123@test.com        | Hello Shone  | Thanks Shone, we appreciate your feedback.  |
      | Eddie    | J1Ohn@test.com      | Hello Eddie  | Thanks Eddie, we appreciate your feedback.  |
      | Tone     | J1Ohn_John@test.com | Hello Tone   | Thanks Tone, we appreciate your feedback.   |
      | Tom      | J1Ohn%John@test.com | Hello Tom    | Thanks Tom, we appreciate your feedback.    |
      | Curran   | J1Ohn.John@test.com | Hello Curran | Thanks Curran, we appreciate your feedback. |
      | Jim      | J1Ohn-john@test.com | Hello Jim    | Thanks Jim, we appreciate your feedback.    |

  # Note:- I have assumed following test scenario accept all types of data (e.i. special char,emojis,numbers and Symbol)
  #         under forename and messages field


 # @FeeBackValidation    @TestCase3
 # Scenario Outline: I should be able to validate error with invalid data
 #   When I click on contact
 #   And I am able to navigate to contact page successfully
 #   And I enter forename "<ForeName>"
 #   And I enter email "<Email>"
 #   And I enter message "<Message>"
 #  # And I click on submit button
 #   Then I should be able to validate "<Error>"errors successfully
 #   Examples:
 #     | ForeName | Email          | Message    |Error|
 #    | John     | ????@test.com | Hello John |Please enter a valid email|
 #     | John     | john&John@test.com | Hello John |Please enter a valid email|
  #   # | John     | 😃👍😉😜John@test.com | Hello John |Please enter a valid email|
  #    | John     | 123&456@test.com | Hello John |Please enter a valid email|
  #    | John     | 123 456@test.com | Hello John |Please enter a valid email|
  #    | John     | john John@test.com | Hello John |Please enter a valid email|

  # Note-1:- I have assumed following test scenario accept all types of data (e.i. special char,emojis,numbers and Symbol)
  #         under forename and messages field
  # Note-2:- I have assumed following test scenario not accept all types of data (e.i. emojis)
  #         under email field



   # @AddToCart      @TestCase4
   # Scenario: To verify I am able to add product to cart
   #   When I click on shop
   #   And I am able to navigate to shop page successfully
   #   And I should not see any items present in cart
   #   And I can click buy button two times on Funny Cow product
   #   And I can click buy button one times on Fluffy Bunny product
   #   And I can click on cart menu
   #   Then I am able to verify (Three) items are in the cart
   #   And I should able to validate relevant product quantity field (Funny Cow = Two Nos and Fluffy Bunny = One Nos) in cart#
