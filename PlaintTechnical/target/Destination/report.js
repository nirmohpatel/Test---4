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
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#@ErrorValidation  @TestCase1"
    },
    {
      "line": 8,
      "value": "#Scenario Outline: All mandatory field error validation for Jupiter Toys Contact page"
    },
    {
      "line": 9,
      "value": "#  When I click on contact"
    },
    {
      "line": 10,
      "value": "#  And I am able to navigate to contact page successfully"
    },
    {
      "line": 11,
      "value": "#  And I click on submit button"
    },
    {
      "line": 12,
      "value": "#  Then I should get forename mandatory field error message on screen as \"\u003cReceiveMessage1\u003e\""
    },
    {
      "line": 13,
      "value": "#  And I should get email mandatory field error message on screen as \"\u003cReceiveMessage2\u003e\""
    },
    {
      "line": 14,
      "value": "#  And I should get Message mandatory field error message on screen as \"\u003cReceiveMessage3\u003e\""
    },
    {
      "line": 15,
      "value": "#  But I enter forename \"\u003cForeName\u003e\""
    },
    {
      "line": 16,
      "value": "#  And I enter email \"\u003cEmail\u003e\""
    },
    {
      "line": 17,
      "value": "#  And I enter message \"\u003cMessage\u003e\""
    },
    {
      "line": 18,
      "value": "#  Then I should be able to verify all mandatory field errors are gone"
    },
    {
      "line": 19,
      "value": "#  Examples:"
    },
    {
      "line": 20,
      "value": "#    | ForeName | Email        | Message   | ReceiveMessage1      | ReceiveMessage2   | ReceiveMessage3     |"
    },
    {
      "line": 21,
      "value": "#    | Sam      | ABC@test.com | Hello Sam | Forename is required | Email is required | Message is required |"
    }
  ],
  "line": 24,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 23,
      "name": "@TestCase2"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"\u003cForeName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"\u003csubmittedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;",
  "rows": [
    {
      "cells": [
        "ForeName",
        "Email",
        "Message",
        "submittedMessage"
      ],
      "line": 35,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;1"
    },
    {
      "cells": [
        "John",
        "John@test.com",
        "Hello John",
        "Thanks John, we appreciate your feedback."
      ],
      "line": 36,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;2"
    },
    {
      "cells": [
        "Shone",
        "123@test.com",
        "Hello Shone",
        "Thanks Shone, we appreciate your feedback."
      ],
      "line": 37,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;3"
    },
    {
      "cells": [
        "Eddie",
        "J1Ohn@test.com",
        "Hello Eddie",
        "Thanks Eddie, we appreciate your feedback."
      ],
      "line": 38,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;4"
    },
    {
      "cells": [
        "Tone",
        "J1Ohn_John@test.com",
        "Hello Tone",
        "Thanks Tone, we appreciate your feedback."
      ],
      "line": 39,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;5"
    },
    {
      "cells": [
        "Tom",
        "J1Ohn%John@test.com",
        "Hello Tom",
        "Thanks Tom, we appreciate your feedback."
      ],
      "line": 40,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;6"
    },
    {
      "cells": [
        "Curran",
        "J1Ohn.John@test.com",
        "Hello Curran",
        "Thanks Curran, we appreciate your feedback."
      ],
      "line": 41,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;7"
    },
    {
      "cells": [
        "Jim",
        "J1Ohn-john@test.com",
        "Hello Jim",
        "Thanks Jim, we appreciate your feedback."
      ],
      "line": 42,
      "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5596104200,
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
  "duration": 480705100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"John\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"John@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello John\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks John, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 129424400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 228917200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 241270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 254271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello John",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 242233300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 161969000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks John, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 12509284000,
  "status": "passed"
});
formatter.after({
  "duration": 57800,
  "status": "passed"
});
formatter.before({
  "duration": 4103901600,
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
  "duration": 125379600,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"Shone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"123@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello Shone\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks Shone, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 117338700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 661942200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shone",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 139567200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 180871800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Shone",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 200521400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 144610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks Shone, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 12978302100,
  "status": "passed"
});
formatter.after({
  "duration": 21100,
  "status": "passed"
});
formatter.before({
  "duration": 4029990600,
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
  "duration": 113763800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"Eddie\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"J1Ohn@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello Eddie\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks Eddie, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 128744200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 191845000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eddie",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 150771900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J1Ohn@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 221691400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Eddie",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 175984100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 140137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks Eddie, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 1729862100,
  "status": "passed"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 3895073200,
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
  "duration": 171845100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"Tone\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"J1Ohn_John@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello Tone\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks Tone, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 166724000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 560525000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tone",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 274024800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J1Ohn_John@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 1129174900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Tone",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 276450200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 264710000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks Tone, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 1244260700,
  "status": "passed"
});
formatter.after({
  "duration": 21100,
  "status": "passed"
});
formatter.before({
  "duration": 4657750000,
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
  "duration": 187283100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"Tom\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"J1Ohn%John@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello Tom\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks Tom, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 132502800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 241804300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 310509500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J1Ohn%John@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 326045400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Tom",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 309358500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 343554700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks Tom, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 6223394800,
  "status": "passed"
});
formatter.after({
  "duration": 24500,
  "status": "passed"
});
formatter.before({
  "duration": 6839881400,
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
  "duration": 167699800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"Curran\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"J1Ohn.John@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello Curran\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks Curran, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 159026600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 710044700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Curran",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 208184500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J1Ohn.John@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 335174200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Curran",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 239720000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 213118100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks Curran, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 4946977600,
  "status": "passed"
});
formatter.after({
  "duration": 16200,
  "status": "passed"
});
formatter.before({
  "duration": 6257357300,
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
  "duration": 233421400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "I should be able to submit FeedBack successfully,",
  "description": "So, I can see feedback successfully submitted message",
  "id": "user-can-add-the-product-to-cart-successfully;i-should-be-able-to-submit-feedback-successfully,;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@TestCase2"
    },
    {
      "line": 23,
      "name": "@FeeBackValidation"
    },
    {
      "line": 1,
      "name": "@JupiterToys"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I click on contact",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I am able to navigate to contact page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter forename \"Jim\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"J1Ohn-john@test.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter message \"Hello Jim\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to verify feedback successfully submitted message \"Thanks Jim, we appreciate your feedback.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_contact()"
});
formatter.result({
  "duration": 232934000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_am_able_to_navigate_to_contact_page_successfully()"
});
formatter.result({
  "duration": 285336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 18
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterForename(String)"
});
formatter.result({
  "duration": 240568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J1Ohn-john@test.com",
      "offset": 15
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterEmail(String)"
});
formatter.result({
  "duration": 388230100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello Jim",
      "offset": 17
    }
  ],
  "location": "MyStepDefs_JupiterToys.iEnterMessage(String)"
});
formatter.result({
  "duration": 233477500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs_JupiterToys.i_click_on_submit_button()"
});
formatter.result({
  "duration": 208733700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks Jim, we appreciate your feedback.",
      "offset": 68
    }
  ],
  "location": "MyStepDefs_JupiterToys.iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String)"
});
formatter.result({
  "duration": 1856349700,
  "status": "passed"
});
formatter.after({
  "duration": 19900,
  "status": "passed"
});
});