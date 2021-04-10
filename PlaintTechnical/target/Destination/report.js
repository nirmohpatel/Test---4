$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ShopJupiterToys.feature");
formatter.feature({
  "line": 2,
  "name": "User can add the product to cart successfully",
  "description": "",
  "id": "user-can-add-the-product-to-cart-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.before({
  "duration": 5734316900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Jupiter toys Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_on_Jupiter_toys_Home_Page()"
});
formatter.result({
  "duration": 428630600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario: To verify I should be able to navigate to Contact page successfully"
    },
    {
      "line": 8,
      "value": "#  When I click on contact"
    },
    {
      "line": 9,
      "value": "#  Then I am able to navigate to contact page successfully"
    },
    {
      "line": 11,
      "value": "#@ErrorValidation"
    },
    {
      "line": 12,
      "value": "#Scenario Outline: All mandatory field error validation for Jupiter Toys Contact page"
    },
    {
      "line": 13,
      "value": "#  When I click on contact"
    },
    {
      "line": 14,
      "value": "#  And I am able to navigate to contact page successfully"
    },
    {
      "line": 15,
      "value": "#  And I click on submit button"
    },
    {
      "line": 16,
      "value": "#  Then I should get forename mandatory field error message on screen as \"\u003cReceiveMessage1\u003e\""
    },
    {
      "line": 17,
      "value": "#  And I should get email mandatory field error message on screen as \"\u003cReceiveMessage2\u003e\""
    },
    {
      "line": 18,
      "value": "#  And I should get Message mandatory field error message on screen as \"\u003cReceiveMessage3\u003e\""
    },
    {
      "line": 19,
      "value": "#  But I enter forename \"\u003cForeName\u003e\""
    },
    {
      "line": 20,
      "value": "#  And I enter email \"\u003cEmail\u003e\""
    },
    {
      "line": 21,
      "value": "#  And I enter message \"\u003cMessage\u003e\""
    },
    {
      "line": 22,
      "value": "#  Then I should be able to verify all mandatory field errors are gone"
    },
    {
      "line": 25,
      "value": "#  Examples:"
    },
    {
      "line": 26,
      "value": "#    | ForeName | Email        | Message   | ReceiveMessage1      | ReceiveMessage2   | ReceiveMessage3     |"
    },
    {
      "line": 27,
      "value": "#    | Sam      | ABC@test.com | Hello Sam | Forename is required | Email is required | Message is required |"
    },
    {
      "line": 29,
      "value": "#@FeeBackValidation"
    },
    {
      "line": 30,
      "value": "#Scenario Outline: I should be able to send FeedBack message successfully,"
    },
    {
      "line": 31,
      "value": "#  When I click on contact"
    },
    {
      "line": 32,
      "value": "#  And I am able to navigate to contact page successfully"
    },
    {
      "line": 33,
      "value": "#  And I enter forename \"\u003cForeName\u003e\""
    },
    {
      "line": 34,
      "value": "#  And I enter email \"\u003cEmail\u003e\""
    },
    {
      "line": 35,
      "value": "#  And I enter message \"\u003cMessage\u003e\""
    },
    {
      "line": 36,
      "value": "#  And I click on submit button"
    },
    {
      "line": 37,
      "value": "#  Then I should be able to validate Message successfully"
    },
    {
      "line": 39,
      "value": "# Examples:"
    },
    {
      "line": 40,
      "value": "#   | ForeName | Email          | Message    |"
    },
    {
      "line": 41,
      "value": "#   | John     | John@gmail.com | Hello John |"
    }
  ],
  "line": 44,
  "name": "To verify I am able to add product to cart",
  "description": "",
  "id": "user-can-add-the-product-to-cart-successfully;to-verify-i-am-able-to-add-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "I click on shop",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I am able to navigate to shop page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I can click buy button two times on Funny Cow product",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I can click buy button one times on Fluffy Bunny product",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I can click on cart menu",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I am able to verify items are in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.iClickOnShop()"
});
formatter.result({
  "duration": 182256500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.iAmAbleToNavigateToShopPageSuccessfully()"
});
formatter.result({
  "duration": 171836200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.iCanClickBuyButtonTwoTimesOnFunnyCowProduct()"
});
formatter.result({
  "duration": 185242200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.iCanClickBuyButtonOneTimesOnFluffyBunnyProduct()"
});
formatter.result({
  "duration": 137541600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.iCanClickOnCartMenu()"
});
formatter.result({
  "duration": 150267200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.iAmAbleToVerifyItemsAreInTheCart()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.after({
  "duration": 31400,
  "status": "passed"
});
});