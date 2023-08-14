package cc.messiah.stepsdefinition;

import cc.messiah.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AgeSteps {
    @When("^User Enters Their \"([^\"]*)\" Into The Name Text Box$")
    public void userEntersTheirIntoTheNameTextBox(String uName) {
        new HomePage().enteringUserNameIntoNameTextBox(uName);
    }

    @And("^User Enters Their \"([^\"]*)\" Into The Date Of Birth Text Box$")
    public void userEntersTheirIntoTheDateOfBirthTextBox(String bDate) {
        new HomePage().enteringUserDateOfBirth(bDate);
    }

    @And("^User Clicks On Submit Button$")
    public void userClicksOnSubmitButton() {
        new HomePage().clickingOnSubmitButton();
    }

    @Then("^User Can Verify The User \"([^\"]*)\" Message$")
    public void userCanVerifyTheUserMessage(String uName) {
        new HomePage().verifyingThatUserNameMessageIsDisplayed(uName);
    }

    @And("^User Can Verify User \"([^\"]*)\" Message$")
    public void userCanVerifyUserMessage(String uAge) {
        new HomePage().verifyThatUserAgeMessageIsDisplayed(uAge);
    }
}
