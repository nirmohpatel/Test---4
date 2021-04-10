package Units;

import org.junit.Assert;

import static org.junit.Assert.assertTrue;

public class UtilsAssert extends BasePage
{
    public static void verifyDisplayMessage(String displayMessage){
        assertTrue(driver.getPageSource().contains(displayMessage));
    }

    public void verifyActualAndExpected(String expected, String actual){
        Assert.assertEquals(expected,actual);
    }

    public void verifyActualMAndExpectedM(String expected, String actual){
        Assert.assertNotEquals(expected,actual);
    }
}
