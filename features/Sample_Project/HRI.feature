Feature: This is a smoke scenarios for HRI

  @HRI @broker_portal @basic1
  Scenario: This is for verifying file with incorrect data is unable to upload and with correct data it will upload successfully
    Given User opens URL of consultant portal and the select required client
    When  User selects account
    And   User select Employee tab and click next tab
    And   User select wrong file and try to upload
    And   User select correct file and try to upload
    Then  User remove file after getting successful message

  @HRI @broker_portal @basic2
  Scenario: Upload an Incorrect Xls and check whether Error message is displayed
    Given User opens URL of consultant portal and the select required client
    When User selects account
    And   User select Employee tab and click next tab
    And User select wrong file and try to upload
    And   User check for the errors
    Then User can see the error files record in file history
    #And User select correct file and try to upload
    #Then User remove file after getting successful message

  @HRI @broker_portal @basic3
  Scenario: Upload an invalid format file and check whether Error message is displayed
    Given User opens URL of consultant portal and the select required client
    When User selects account
    And   User select Employee tab and click next tab
    And User try to upload file other than xlsx filetype
    And User receive error message
    #And User select correct file and try to upload
    #Then User remove file after getting successful message

  @HRI @broker_portal @basic4
  Scenario: Perform UI verification on Employee load page –Bad file load
    Given User opens URL of consultant portal and the select required client
    When  User selects account
    And   User select Employee tab and click next tab
    And   User select wrong file and try to upload
    And   User export error file and check errors
    And  User select correct file and try to upload
    Then User remove file after getting successful message

  @HRI @broker_portal @basic5
  Scenario:Perform UI verification on Employee load page-First time load
    Given User opens URL of consultant portal and the select required client
    When  User selects account
    And   User select Employee tab and click next tab
    Then User perform UI verification
    # ------------------------------------------------------------------------------------------------------------
    #-----------------------------------------------------------------------------------------------------------
  #  HRR
  @HRI @admin_portal @basic6
  Scenario: Export the good file  record and check it will uploaded successfully
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And   Upload the good file
    And   User check file upload successfully


  @HRI @admin_portal @basic7
  Scenario: On-Screen Remediation
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And  Upload the file
    And  User click on error and remidiate them 3
    And  User click on error and remidiate them 1
    And  User click on error and remidiate them 2
    Then User checks that after remidiation file will be successfully uploaded

  @HRI @admin_portal @basic8
  Scenario: Export the error record
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And   Upload the file
    And   User click on error tab
    And   User click on export file of errors
    And   User click on error tab
    Then  User click on Skip remaining error tab

  @HRI @admin_portal @basic9
  Scenario: Export the error record remidiate it and upload again
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And   Upload the file2
    And   User click on error tab
    And  User upload the new remidiated file
    Then User checks that after remidiation file will be successfully uploaded


  @HRI @admin_portal @basic10
  Scenario: ulpoad the error record and after getting error message skip the error files
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And   Upload the file
    And   User click on error tab
    Then  User click on Skip remaining error tab

  @HRI @admin_portal @basic11
  Scenario: Error files contain more than one participant having errors in their records and when we skip that one errors only one got skipped.
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And   Upload the file
    And   User click on error tab
    And   User Skip the error record for one participant
    And   User undo the skip error record for that participant
    Then  User click on error tab after clicking on undo tab
    Then  User click on Skip remaining error tab

  @HRI @admin_portal @basic12
  Scenario: Error files contain only one participant and when we skip that all errors will got skipped.
    Given User opens URL of HR admin portal
    When  user choose "upload a file tab" from "Employee" tab
    And   Upload the error file
    And   User click on error tab
    And   User Skip the error record for one participant 12
    Then  User click on error tab "Error"
