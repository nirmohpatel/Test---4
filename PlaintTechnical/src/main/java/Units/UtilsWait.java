package Units;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UtilsWait extends BasePage
{

    WebDriverWait wait;

    public void waitForElementToBeClickableId (String Id, int timing){
        wait = new WebDriverWait(driver,timing);
        wait.until(ExpectedConditions.elementToBeClickable(By.id(Id)));

    }

    public void waitForElementToBeClickableClassName (String className){
        wait = new WebDriverWait(driver,20);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(className)));

    }
    public void waitForElementToBeClickableXpath (String xpath){
        wait = new WebDriverWait(driver,40);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
    }

    public void waitForElementToBeVisibleID(String id)
    {
        wait = new WebDriverWait(driver,50);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(id)));
    }

    public void waitForElementToBeVisibleClassName(String className)
    {
        wait = new WebDriverWait(driver,50);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.className(className)));
    }

    public void waitForElementToBeVisibleXpath(String xpath)
    {
        wait = new WebDriverWait(driver,50);
        wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(xpath)));
    }
}
