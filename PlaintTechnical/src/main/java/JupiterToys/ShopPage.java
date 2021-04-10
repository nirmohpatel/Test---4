package JupiterToys;

import Units.BasePage;
import Units.Elements;
import Units.UtilsAssert;
import Units.UtilsWait;

public class ShopPage extends BasePage
{

    Elements elements;
    UtilsWait utilsWait;
    UtilsAssert utilsAssert;

    private String expectedFunnyCowText = "Funny Cow";
    private String actualFunnyCowText = "//h4[contains(text(),'Funny Cow')]";
    private String funnyCowBuyButton = "//li[@id=\"product-6\"]/div/p/a";
    private String fluffyBunnyBuyButton = "//li[@id=\"product-4\"]/div/p/a";
    private String cart = "Cart";
    private String actualMessageFieldErrorMessage = "message-err";
    private String foreNameField = "forename";
    private String emailField = "email";
    private String messageField = "message";
    private String expectedMessageForErrorGone = "We welcome your feedback - tell it how it is.";
    private String actualMessageForErrorGone = "//div[@class=\"alert alert-info ng-scope\"]";
    private String expectedFeedBackMessage = "Thanks John, we appreciate your feedback.";
    private String actualFeedBackMessage = "//div[@class=\"alert alert-success\"]";

    public void toVerifyThatUserIsOnShopPage()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        String actualValueForFunnyCow =  elements.element_Xpath(actualFunnyCowText).getText();
        utilsAssert.verifyActualAndExpected(expectedFunnyCowText,actualValueForFunnyCow);
    }

    public void clickOnFunnyCowBuyButton ()
    {
        elements = new Elements();
        elements.elementClickXpath(funnyCowBuyButton);
    }

    public void clickOnFluffyBunnyBuyButton ()
    {
        elements = new Elements();
        elements.elementClickXpath(fluffyBunnyBuyButton);
    }

    public void clickOnCart ()
    {
        elements = new Elements();
        elements.elementClickPartialLinkText(cart);
    }
}
