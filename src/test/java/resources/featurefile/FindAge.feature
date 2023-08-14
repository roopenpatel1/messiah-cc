Feature: Verifying The Age Calculation Functionality

  Background: User Is At Home Page

  @regression
  Scenario Outline: Verify That User Can Find Out Their Age By Entering Their Details
    When User Enters Their "<uName>" Into The Name Text Box
    And User Enters Their "<bDate>" Into The Date Of Birth Text Box
    And User Clicks On Submit Button
    Then User Can Verify The User "<uName>" Message
    And User Can Verify User "<uAge>" Message

    Examples:
      | uName  | bDate      | uAge |
      | Roopen | 25/11/1981 | 41   |
      | Abc    | 25/12/1981 | 41   |
