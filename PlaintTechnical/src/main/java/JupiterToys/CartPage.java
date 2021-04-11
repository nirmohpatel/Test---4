package JupiterToys;

import Units.Elements;
import Units.UtilsAssert;
import Units.UtilsWait;


public class CartPage
{
    Elements elements;
    UtilsWait utilsWait;
    UtilsAssert utilsAssert;

    private String expectedCheckOutButtonText = "Check Out";
    private String actualCheckOutButtonText = "Check Out";
    private String expectedTotalQuantityInCart = "3";
    private String actualTotalQuantityInCart = "//p[@class=\"cart-msg\"]/span[@class=\"cart-count ng-binding\"]";

    private String expectedFirstProductText = "Funny Cow";
    private String actualFirstProductText = "//*[contains(text(),' Funny Cow')]";

    private String expectedFirstProductQuantity = "2";
    private String actualFirstProductQuantity = "//tbody/tr[1]/td[3]/input";

    private String expectedSecondProductText = "Fluffy Bunny";
    private String actualSecondProductText = "//*[contains(text(),' Fluffy Bunny')]";


    public void toValidateCheckOutButton()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeClickableLinkText(actualCheckOutButtonText);
        System.out.println("Jupiter Cart Page loaded successfully.");
        String actualNameValueCheckOutButtonText = elements.element_linkText(actualCheckOutButtonText).getText();
        utilsAssert.verifyActualAndExpected(expectedCheckOutButtonText,actualNameValueCheckOutButtonText);
    }
    public void toVerifyTotalProductAndThereQuantityInCart()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeVisibleXpath(actualFirstProductText);
        System.out.println("Verify First product successfully.");

        String actualNameValueTotalQuantityInCart = elements.element_Xpath(actualTotalQuantityInCart).getText();
        utilsAssert.verifyActualAndExpected(expectedTotalQuantityInCart,actualNameValueTotalQuantityInCart);

       // String actualNameValueFirstProductText = elements.element_Xpath(actualFirstProductText).getText();
       // utilsAssert.verifyActualAndExpected(expectedFirstProductText,actualNameValueFirstProductText);


       // String actualNameValueFirstProductQuantity = elements.element_Xpath(actualFirstProductQuantity).getText();
       // utilsAssert.verifyActualAndExpected(expectedFirstProductQuantity,actualNameValueFirstProductQuantity);

       // String actualNameValueSecondProductText = elements.element_Xpath(actualSecondProductText).getText();
       // utilsAssert.verifyActualAndExpected(expectedSecondProductText,actualNameValueSecondProductText);
    }

    public void toVerifyFirstProductAndThereQuantityInCart()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeVisibleXpath(actualFirstProductText);
        System.out.println("Verify First product successfully.");

        // String actualNameValueFirstProductText = elements.element_Xpath(actualFirstProductText).getText();
        // utilsAssert.verifyActualAndExpected(expectedFirstProductText,actualNameValueFirstProductText);

        // String actualNameValueFirstProductQuantity = elements.element_Xpath(actualFirstProductQuantity).getText();
        // utilsAssert.verifyActualAndExpected(expectedFirstProductQuantity,actualNameValueFirstProductQuantity);
    }

    public void toVerifySecondProductAndThereQuantityInCart()
    {
        elements = new Elements();
        utilsAssert = new UtilsAssert();
        utilsWait = new UtilsWait();
        utilsWait.waitForElementToBeVisibleXpath(actualFirstProductText);
        System.out.println("Verify Second product successfully.");

        // String actualNameValueSecondProductText = elements.element_Xpath(actualSecondProductText).getText();
        // utilsAssert.verifyActualAndExpected(expectedSecondProductText,actualNameValueSecondProductText);

        // String actualNameValueFirstProductQuantity = elements.element_Xpath(actualFirstProductQuantity).getText();
        // utilsAssert.verifyActualAndExpected(expectedFirstProductQuantity,actualNameValueFirstProductQuantity);
    }

}
