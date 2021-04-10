package Units;


import org.openqa.selenium.By;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;


public class Elements extends BasePage
{

    public WebElement element_ClassName(String className){
        return driver.findElement(By.className(className));
    }

    public WebElement element_ID(String Id){
        return driver.findElement(By.id(Id));
    }

    public WebElement element_Xpath(String xpath){
        return driver.findElement(By.xpath(xpath));
    }

    public WebElement element_linkText(String linkText)
    {
        return driver.findElement(By.linkText(linkText));
    }

    public WebElement element_partialLinkText(String partialLinkText)
    {
        return driver.findElement(By.partialLinkText(partialLinkText));
    }


    public void elementClickClassName(String className){
        element_Xpath(className).click();
    }

    public void elementClickXpath(String xpath){
        element_Xpath(xpath).click();
    }

    public void elementClickId(String id){
        element_ID(id).click();
    }

    public void elementClickLinkText(String linkText){
        element_linkText(linkText).click();
    }

    public void elementClickPartialLinkText(String PartialLinkText){
        element_partialLinkText(PartialLinkText).click();
    }

    public void getTextValueFromElementId(String Id){
        element_ID(Id).getText();
    }

    public void elementSendKeysId(String Id, String text){
        element_ID(Id).sendKeys(text);
    }


    public static void doubleClickOnElement (By by)
    {   //Instantiate Action Class
        Actions actions = new Actions(driver);
        WebElement elementLocator = driver.findElement(by);
        actions.doubleClick(elementLocator).perform();
    }


}
