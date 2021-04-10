package org.example;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import Units.BasePage;
import Units.BrowserManager;


public class Hooks extends BasePage
{
    BrowserManager browserManager = new BrowserManager();

    @Before
    public void openBrowser()
    {
        browserManager.setBrowser();
    }

    @After
    public void closeBrowser()
    {

        // browserManager.closeBrowser();
    }
}
