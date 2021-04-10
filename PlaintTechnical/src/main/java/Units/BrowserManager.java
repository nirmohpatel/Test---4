package Units;

import org.example.LoadProperty;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserManager extends BasePage
{
    public static LoadProperty loadProperty = new LoadProperty();
    public static String BrowserName = loadProperty.getProperty("BrowserName");

    public void setBrowser() {
        if (BrowserName.equalsIgnoreCase("chrome"))
        {
            System.setProperty("webdriver.chrome.driver","BrowserDrivers\\chromedriver.exe");
            driver =new ChromeDriver();
        } else {
            System.setProperty("webdriver.gecko.driver","");
            driver = new FirefoxDriver();
        }


        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get(loadProperty.getProperty("Url"));

    }
    //public void closeBrowser() {
    // driver.close();}// reusable method to close browser TescoUrl
}
