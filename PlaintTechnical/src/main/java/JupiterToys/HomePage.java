package JupiterToys;

import Units.BasePage;
import Units.Elements;
import Units.UtilsAssert;
import Units.UtilsWait;

public class HomePage extends BasePage
{
    Elements elements;
    UtilsWait utilsWait;
    UtilsAssert utilsAssert;

    private String expectedHomePageText = "Jupiter Toys";
    private String actualHomePageText = "//div[@class=\"hero-unit\"]/h1";
    private String contact = "nav-contact";
    private String shop = "Shop";

    public void validateJupiterHomePage()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeClickableClassName(actualHomePageText);
        System.out.println("Jupiter Home Page loaded successfully.");
        String actualNameValueJupiterHomePageText = elements.element_Xpath(actualHomePageText).getText();
        utilsAssert.verifyActualAndExpected(expectedHomePageText,actualNameValueJupiterHomePageText);
    }

    public void clickOnContact ()
    {
        elements = new Elements();
        elements.elementClickId(contact);
    }
    public void clickOnShop ()
    {
        elements = new Elements();
        elements.elementClickLinkText(shop);
    }
}
