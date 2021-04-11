package org.example;

import JupiterToys.CartPage;
import JupiterToys.ContactPage;
import JupiterToys.HomePage;
import JupiterToys.ShopPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;

public class MyStepDefs_JupiterToys
{
    HomePage homePage = new HomePage();
    ContactPage contactPage = new ContactPage();
    ShopPage shopPage = new ShopPage();
    CartPage cartPage = new CartPage();

    @Given("^I am on Jupiter toys Home Page$")
    public void i_am_on_Jupiter_toys_Home_Page()
    {
        //System.out.println("I am on Jupiter toys Home Page");
        homePage.validateJupiterHomePage();
    }

    @When("^I click on contact$")
    public void i_click_on_contact()
    {
        System.out.println("I click on contact");
        homePage.clickOnContact();
    }

    @Then("^I am able to navigate to contact page successfully$")
    public void i_am_able_to_navigate_to_contact_page_successfully()
    {
        System.out.println("I am able to navigate to contact page successfully");
        contactPage.toVerifyThatUserIsOnContactPage();

    }

    @And("^I click on submit button$")
    public void i_click_on_submit_button()
    {
        System.out.println("I click on submit button");
        contactPage.clickOnSubmitButtonContactPage();
    }

    @Then("^I should get forename mandatory field error message on screen as \"([^\"]*)\"$")
    public void iShouldGetForenameMandatoryFieldErrorMessageOnScreenAs(String ReceiveMessage1)
    {
        contactPage.toVerifyForeNameErrorMessage(ReceiveMessage1);
    }

    @And("^I should get email mandatory field error message on screen as \"([^\"]*)\"$")
    public void iShouldGetEmailMandatoryFieldErrorMessageOnScreenAs(String ReceiveMessage2)
    {
        contactPage.toVerifyEmailFieldErrorMessage(ReceiveMessage2);
    }

    @And("^I should get Message mandatory field error message on screen as \"([^\"]*)\"$")
    public void iShouldGetMessageMandatoryFieldErrorMessageOnScreenAs(String ReceiveMessage3)
    {
        contactPage.toVerifyMessageFieldErrorMessage(ReceiveMessage3);
    }

    @But("^I enter forename \"([^\"]*)\"$")
    public void iEnterForename(String ForeName)
    {
        contactPage.userEnterForename(ForeName);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String Email)
    {
        contactPage.userEnterEmail(Email);
    }

    @And("^I enter message \"([^\"]*)\"$")
    public void iEnterMessage(String Message)
    {
        contactPage.userEnterMessage(Message);
    }


    @Then("^I should be able to verify all mandatory field errors are gone$")
    public void iShouldBeAbleToVerifyAllMandatoryFieldErrorsAreGone()
    {
        contactPage.toVerifyAllErrorsAreGone();
    }

    @Then("^I should be able to verify feedback successfully submitted message \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage(String submittedMessage)
    {
        contactPage.toVerifyUserSendFeedBackSuccessfullyMessage(submittedMessage);
    }

   /* @Then("^I should be able to verify feedback successfully submitted message$")
    public void iShouldBeAbleToVerifyFeedbackSuccessfullySubmittedMessage()
    {
        contactPage.toVerifyUserSendFeedBackSuccessfullyMessage();
    }*/


    @Then("^I should be able to validate \"([^\"]*)\"errors successfully$")
    public void iShouldBeAbleToValidateErrorsSuccessfully(String Error)
    {
        contactPage.toVerifyEmailFieldInvalidDataErrorMessage(Error);
    }

    @When("^I click on shop$")
    public void iClickOnShop()
    {
        homePage.clickOnShop();
    }

    @And("^I am able to navigate to shop page successfully$")
    public void iAmAbleToNavigateToShopPageSuccessfully()
    {
        shopPage.toVerifyThatUserIsOnShopPage();
    }

    @And("^I should not see any items present in cart$")
    public void iShouldNotSeeAnyItemsPresentInCart()
    {
        shopPage.toVerifyThatCartIsEmpty();
    }

    @And("^I can click buy button two times on Funny Cow product$")
    public void iCanClickBuyButtonTwoTimesOnFunnyCowProduct()
    {
        shopPage.clickOnFunnyCowBuyButton();
        shopPage.clickOnFunnyCowBuyButton();
    }

    @And("^I can click buy button one times on Fluffy Bunny product$")
    public void iCanClickBuyButtonOneTimesOnFluffyBunnyProduct()
    {
        shopPage.clickOnFluffyBunnyBuyButton();
    }

    @And("^I can click on cart menu$")
    public void iCanClickOnCartMenu()
    {
        shopPage.clickOnCart();
    }

    @Then("^I am able to verify \\(Three\\) items are in the cart$")
    public void iAmAbleToVerifyThreeItemsAreInTheCart()
    {
        shopPage.toVerifyThatCartWithProduct();
    }

    @And("^I should able to validate relevant product quantity field \\(Funny Cow = Two Nos and Fluffy Bunny = One Nos\\) in cart$")
    public void iShouldAbleToValidateRelevantProductQuantityFieldFunnyCowTwoNosAndFluffyBunnyOneNosInCart()
    {
        cartPage.toValidateCheckOutButton();
        cartPage.toVerifyTotalProductAndThereQuantityInCart();
        cartPage.toVerifyFirstProductAndThereQuantityInCart();
        cartPage.toVerifySecondProductAndThereQuantityInCart();
    }


}
