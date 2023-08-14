package cc.messiah.pages;

import cc.messiah.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.time.Duration;

public class HomePage extends Utility {

    // Declaring Logger variable for logging every method in logs
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() { // Declaring Constructor to initialize driver for the current page
        PageFactory.initElements(driver, this);
    }

    // Defining Web Driver Wait
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

    // Defining Locators
    @CacheLookup
    @FindBy(xpath = "//input[@id='inputName']")
    WebElement userName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='inputBirthday']")
    WebElement birthDate;

    @CacheLookup
    @FindBy(xpath = "//button[@id='submitButton']")
    WebElement submitButton;

    @CacheLookup
    @FindBy(xpath = "//span[@id='resultName']")
    WebElement resultName;

    @CacheLookup
    @FindBy(xpath = "//span[@id='resultAge']")
    WebElement resultAge;

    // Declaring Methods
    public void enteringUserNameIntoNameTextBox(String name) {
        sendTextToElement(userName, name);
        log.info("Entering User's Name : " + userName.toString());
    }

    public void enteringUserDateOfBirth(String date) {
        sendTextToElement(birthDate, date);
        log.info("Entering User's Date Of Birth : " + birthDate.toString());
    }

    public void clickingOnSubmitButton() {
        clickOnElement(submitButton);
        log.info("Clicking On Submit Button : " + submitButton);
    }

    public void verifyingThatUserNameMessageIsDisplayed(String name) {
        // Applying WebDriver Wait to locate the Displayed Name Element
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("resultName")));
        // Comparing The Expected Name with Actual Displayed Name
        Assert.assertEquals(getTextFromElement(resultName), name);
        log.info("Verifying Displayed User Name : " + resultName.toString());
    }

    public void verifyThatUserAgeMessageIsDisplayed(String age) {
        // Applying WebDriver Wait to locate the Displayed Name Element
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("resultAge")));
        // Comparing The Expected Age with Actual Displayed Age
        Assert.assertEquals(getTextFromElement(resultAge), age);
        log.info("Verifying Displayed User Age : " + resultAge.toString());
    }
}


