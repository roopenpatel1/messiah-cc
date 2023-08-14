$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FindAge.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying The Age Calculation Functionality",
  "description": "",
  "id": "verifying-the-age-calculation-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify That User Can Find Out Their Age By Entering Their Details",
  "description": "",
  "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Enters Their \"\u003cuName\u003e\" Into The Name Text Box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters Their \"\u003cbDate\u003e\" Into The Date Of Birth Text Box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Clicks On Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Can Verify The User \"\u003cuName\u003e\" Message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Can Verify User \"\u003cuAge\u003e\" Message",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details;",
  "rows": [
    {
      "cells": [
        "uName",
        "bDate",
        "uAge"
      ],
      "line": 14,
      "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details;;1"
    },
    {
      "cells": [
        "Roopen",
        "25/11/1981",
        "41"
      ],
      "line": 15,
      "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details;;2"
    },
    {
      "cells": [
        "Abc",
        "25/12/1981",
        "41"
      ],
      "line": 16,
      "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3023928900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User Is At Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "Verify That User Can Find Out Their Age By Entering Their Details",
  "description": "",
  "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Enters Their \"Roopen\" Into The Name Text Box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters Their \"25/11/1981\" Into The Date Of Birth Text Box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Clicks On Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Can Verify The User \"Roopen\" Message",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Can Verify User \"41\" Message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Roopen",
      "offset": 19
    }
  ],
  "location": "AgeSteps.userEntersTheirIntoTheNameTextBox(String)"
});
formatter.result({
  "duration": 156662300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25/11/1981",
      "offset": 19
    }
  ],
  "location": "AgeSteps.userEntersTheirIntoTheDateOfBirthTextBox(String)"
});
formatter.result({
  "duration": 60922900,
  "status": "passed"
});
formatter.match({
  "location": "AgeSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 53522200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roopen",
      "offset": 26
    }
  ],
  "location": "AgeSteps.userCanVerifyTheUserMessage(String)"
});
formatter.result({
  "duration": 612268300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41",
      "offset": 22
    }
  ],
  "location": "AgeSteps.userCanVerifyUserMessage(String)"
});
formatter.result({
  "duration": 34220800,
  "status": "passed"
});
formatter.after({
  "duration": 657431100,
  "status": "passed"
});
formatter.before({
  "duration": 2110692400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User Is At Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Verify That User Can Find Out Their Age By Entering Their Details",
  "description": "",
  "id": "verifying-the-age-calculation-functionality;verify-that-user-can-find-out-their-age-by-entering-their-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Enters Their \"Abc\" Into The Name Text Box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters Their \"25/12/1981\" Into The Date Of Birth Text Box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Clicks On Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Can Verify The User \"Abc\" Message",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Can Verify User \"41\" Message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Abc",
      "offset": 19
    }
  ],
  "location": "AgeSteps.userEntersTheirIntoTheNameTextBox(String)"
});
formatter.result({
  "duration": 69918500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25/12/1981",
      "offset": 19
    }
  ],
  "location": "AgeSteps.userEntersTheirIntoTheDateOfBirthTextBox(String)"
});
formatter.result({
  "duration": 49048300,
  "status": "passed"
});
formatter.match({
  "location": "AgeSteps.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 48588600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc",
      "offset": 26
    }
  ],
  "location": "AgeSteps.userCanVerifyTheUserMessage(String)"
});
formatter.result({
  "duration": 594104800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41",
      "offset": 22
    }
  ],
  "location": "AgeSteps.userCanVerifyUserMessage(String)"
});
formatter.result({
  "duration": 31655400,
  "status": "passed"
});
formatter.after({
  "duration": 631681500,
  "status": "passed"
});
});