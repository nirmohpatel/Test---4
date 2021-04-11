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
    private String actualFunnyCowText = "//li[@id=\"product-6\"]/div/h4[@class=\"product-title ng-binding\"]";
    private String funnyCowBuyButton = "//li[@id=\"product-6\"]/div/p/a";
    private String fluffyBunnyBuyButton = "//li[@id=\"product-4\"]/div/p/a";
    private String cart = "Cart";
    private String actualCartText = "nav-cart";
    private String expectedCartText = "Cart (0)";
    private String expectedCartTextWithProduct = "Cart (3)";


    public void toVerifyThatUserIsOnShopPage()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeVisibleXpath(actualFunnyCowText);
        String actualValueForFunnyCow = elements.element_Xpath(actualFunnyCowText).getText();
        utilsAssert.verifyActualAndExpected(expectedFunnyCowText,actualValueForFunnyCow);
    }
    public void toVerifyThatCartIsEmpty ()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        String actualValueCartText =  elements.element_ID(actualCartText).getText();
        utilsAssert.verifyActualAndExpected(expectedCartText,actualValueCartText);
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

    public void toVerifyThatCartWithProduct ()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        String actualValueCartText =  elements.element_ID(actualCartText).getText();
        utilsAssert.verifyActualAndExpected(expectedCartTextWithProduct,actualValueCartText);
    }

    public void clickOnCart ()
    {
        elements = new Elements();
        elements.elementClickPartialLinkText(cart);
    }
}
