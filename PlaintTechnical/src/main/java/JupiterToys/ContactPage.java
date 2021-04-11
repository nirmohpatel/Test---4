package JupiterToys;

import Units.BasePage;
import Units.Elements;
import Units.UtilsAssert;
import Units.UtilsWait;

public class ContactPage extends BasePage
{
    Elements elements;
    UtilsWait utilsWait;
    UtilsAssert utilsAssert;

    private String expectedContactPageText = "We welcome your feedback";
    private String actualContactPageText = "//strong[contains(text(),'We welcome your feedback')]";
    private String submitButtonContactPage = "Submit";
    private String actualForeNameFieldErrorMessage = "forename-err";
    private String actualEmailFieldErrorMessage = "email-err";
    private String actualMessageFieldErrorMessage = "message-err";
    private String foreNameField = "forename";
    private String emailField = "email";
    private String messageField = "message";
    private String expectedMessageForErrorGone = "We welcome your feedback - tell it how it is.";
    private String actualMessageForErrorGone = "//div[@class=\"alert alert-info ng-scope\"]";
    private String actualFeedBackMessage = "//div[@class=\"alert alert-success\"]";

    public void toVerifyThatUserIsOnContactPage()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeVisibleXpath(actualContactPageText);
        String actualValueForContactPage =  elements.element_Xpath(actualContactPageText).getText();
        utilsAssert.verifyActualAndExpected(expectedContactPageText,actualValueForContactPage);
    }

    public void userEnterForename(String ForeName)
    {
        elements = new Elements();
        elements.elementSendKeysId(foreNameField,ForeName);
    }
    public void userEnterEmail(String Email)
    {
        elements = new Elements();
        elements.elementSendKeysId(emailField,Email);
    }
    public void userEnterMessage(String Message)
    {
        elements = new Elements();
        elements.elementSendKeysId(messageField,Message);
    }

    public void clickOnSubmitButtonContactPage ()
    {
        elements = new Elements();
        elements.elementClickLinkText(submitButtonContactPage);
    }

    public void toVerifyForeNameErrorMessage(String ReceiveMessage1)
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        String actualValueForForeNameFieldErrorMessage =  elements.element_ID(actualForeNameFieldErrorMessage).getText();
        utilsAssert.verifyActualAndExpected(ReceiveMessage1,actualValueForForeNameFieldErrorMessage);
    }
    public void toVerifyEmailFieldErrorMessage(String ReceiveMessage2)
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        String actualValueForEmailFieldErrorMessage =  elements.element_ID(actualEmailFieldErrorMessage).getText();
        utilsAssert.verifyActualAndExpected(ReceiveMessage2,actualValueForEmailFieldErrorMessage);
    }
    public void toVerifyMessageFieldErrorMessage(String ReceiveMessage3)
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        String actualValueForMessageFieldErrorMessage =  elements.element_ID(actualMessageFieldErrorMessage).getText();
        utilsAssert.verifyActualAndExpected(ReceiveMessage3,actualValueForMessageFieldErrorMessage);
    }

    public void toVerifyAllErrorsAreGone()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        String actualValueForMessageForErrorGone =  elements.element_Xpath(actualMessageForErrorGone).getText();
        utilsAssert.verifyActualAndExpected(expectedMessageForErrorGone,actualValueForMessageForErrorGone);
    }

    public void toVerifyUserSendFeedBackSuccessfullyMessage(String submittedMessage)
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeVisibleXpath(actualFeedBackMessage);
        String actualValueForFeedBackMessage = elements.element_Xpath(actualFeedBackMessage).getText();
        utilsAssert.verifyActualAndExpected(submittedMessage,actualValueForFeedBackMessage);
    }

    public void toVerifyEmailFieldInvalidDataErrorMessage(String Error)
    {
        //private String expectedEmailFieldInvalidDataErrorMessage = "Please enter a valid email";
       // private String actualEmailFieldInvalidDataErrorMessage = "id=\"email-err\"";
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        String actualValueForEmailFieldInvalidDataErrorMessage =  elements.element_ID(actualEmailFieldErrorMessage).getText();
        utilsAssert.verifyActualAndExpected(Error,actualValueForEmailFieldInvalidDataErrorMessage);
    }
}
