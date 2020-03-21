       var data = require('../../TestResources/HRI');
       var Objects = require(__dirname + '/../../repository/HRI.js');
       var action = require(__dirname + '/../../features/step_definitions/ReusableTests.js');
       var fs = require('fs');
       var oldWindow1,newWindow1
       function initializePageObjects(browser, callback) {
           var BPPage = browser.page.HRI();
           HRI1 = BPPage.section.HRI1;
           callback();
       }
       //1
       module.exports = function() {
           this.Given(/^User opens URL of consultant portal and the select required client$/, function () {
               var URL;
               browser = this;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   URL = data.urlhri
                   initializePageObjects(browser, function () {
                       browser.maximizeWindow()
                           .deleteCookies()
                           .url(URL);
                       browser.timeoutsImplicitWait(30000)
                       browser.pause(3000);
                       HRI1.waitForElementVisible('@username', data.wait);
                       HRI1.click('@username');
                       HRI1.setValue('@username', data.user_name);
                       HRI1.waitForElementVisible('@password', data.wait);
                       HRI1.click('@password');
                       HRI1.setValue('@password', data.pass_word);
                       HRI1.waitForElementVisible('@login', data.wait);
                       HRI1.click('@login');
                       HRI1.waitForElementVisible('@dashboard', data.wait)
                   });
               }
           });
           //


           //main
           this.When(/^1-User selects account and click on next tab$/, function () {
               browser = this;
               var URL1;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       URL1 = data.amit_test_url
                       browser.url(URL1);
                       browser.pause(10000)
                       browser.useXpath()
                       HRI1.waitForElementVisible('@next', data.wait)
                       HRI1.click('@next');
                   })
               }
           });
           //
           this.When(/^User select wrong file and try to upload$/, function () {
               browser = this;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.pause(5000)
                       HRI1.waitForElementVisible('@trial', data.wait);
                       browser.useXpath()
                       browser.setValue('//input[@id="demographicUpload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\HRi\\testingdummy.xlsx'))
                       browser.pause(2000);
                       HRI1.waitForElementVisible('@upload', data.longWait);
                       HRI1.click('@upload');
                       browser.pause(15000);
                       HRI1.waitForElementVisible('@error', 50000);
                       HRI1.getText('@error') , function (actual) {
                           console.log(actual)
                       }
                   });

           }
       });



           this.Then(/^User check for the errors$/, function () {
               browser = this;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@error_summary', data.wait);
                       HRI1.click('@error_summary');
                       HRI1.waitForElementVisible('@error_summary_no', data.longWait);
                       HRI1.getText('@error_summary_no', function (actual) {
                           console.log(actual)
                       });
                       HRI1.waitForElementVisible('@error_details', data.wait);
                       HRI1.click('@error_details');
                       browser.pause(3000)

                       })
                   }
               });

           this.Then(/^User select correct file and try to upload$/, function () {
               browser = this;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@trial', data.wait);
                       browser.useXpath().setValue('//input[@id="demographicUpload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\HRi\\testing.xlsx'))
                       HRI1.waitForElementVisible('@upload',50000);
                       HRI1.click('@upload');
                       browser.useXpath()
                       browser.pause(10000)
                       HRI1.waitForElementVisible('@success_msg',50000);
                       HRI1.getText('@success_msg', function (actual) {
                           console.log(actual)
                       });
                       browser.pause(10000)
                   });
               };
           });

           this.Then(/^User remove file after getting successful message$/, function () {
               browser = this;
               var execEnv = data["TestingEnvironment"];
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                          browser.pause(5000);
                       HRI1.waitForElementVisible('@remove', data.longWait);
                       HRI1.click('@remove');
                       browser.pause(5000);
                   })
               }
           });

           this.When(/^User try to upload file other than xlsx filetype$/, function () {
               browser = this;
               var URL1;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@trial', data.wait);
                       browser.useXpath().setValue('//input[@id="demographicUpload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\HRi\\testing.pdf'))
                       HRI1.waitForElementVisible('@upload', data.longWait);
                       HRI1.click('@upload');
                   });
               }
           });

           this.Then(/^User receive error message$/, function () {
               browser = this;
               var URL1;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                        browser.pause(10000)
                       HRI1.waitForElementVisible('@error', 50000);
                       HRI1.getText('@error', function (actual) {
                           console.log(actual)
                       })
                   });
               }
           });

           this.Then(/^User export error file and check errors$/, function () {
               browser = this;
               var URL1;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.pause(5000);
                       HRI1.waitForElementVisible('@export',50000);
                       HRI1.click('@export');
                   });
               };
           });

///////////////5555555555555555555555555//////////////////

           this.Then(/^User select the client$/, function () {
               browser = this;
               var URL1;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       URL1 = data.amit_test_url
                       browser.url(URL1);
                       browser.useXpath().waitForElementPresent('//button[@class=\'button btn-next radius evo-button ng-binding\']',20000);
                       HRI1.click('//button[@class=\'button btn-next radius evo-button ng-binding\']');

                   });
               };
           });
           this.Then(/^User perform UI verification$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@choose_file', data.wait);
                       HRI1.waitForElementVisible('@File_History', data.wait);
                       HRI1.waitForElementNotPresent('upload',data.wait)

               });
           };
       });
           this.Then(/^User can see the error files record in file history$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@File_History', data.wait);
                        HRI1.click('@File_History');
                       HRI1.waitForElementNotPresent('File_history_cancel',data.wait)
                       HRI1.click('@File_history_cancel');
                   });
               };
           });


           this.Then(/^User selects account$/, function () {
               browser = this;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.pause(3000);
                       HRI1.waitForElementVisible('@client', data.wait);
                       HRI1.click('@client');
                       HRI1.waitForElementVisible('@pending_client', data.wait);
                       HRI1.click('@pending_client');
                       //  HRI1.waitForElementVisible('@medium_shortcut', data.wait);
                       // HRI1.click('@medium_shortcut');
                       browser.pause(5000)
                       browser.useXpath()
                       HRI1.waitForElementVisible('@Amit_smoke', data.wait);
                       HRI1.click('@Amit_smoke');
                       browser.pause(5000)
                   })
               }
           });


           this.Then(/^User select Employee tab and click next tab$/, function () {
               browser = this;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.pause(3000);
                       HRI1.waitForElementVisible('@Employee_data', data.wait);
                       HRI1.click('@Employee_data');
                        HRI1.waitForElementVisible('@next', data.wait);
                        HRI1.click('@next');
                   })
               }
           });


                     ///// HR ADMIN///////

           this.Then(/^User opens URL of HR admin portal$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   URL = data.urlhriHR
                   initializePageObjects(browser, function () {
                       browser.maximizeWindow()
                           .deleteCookies()
                           .url(URL);
                       browser.timeoutsImplicitWait(30000)
                       browser.pause(3000);
                       HRI1.waitForElementVisible('@HR_username', data.wait);
                       HRI1.click('@HR_username');
                       HRI1.setValue('@HR_username', data.user_nameHR);
                       HRI1.waitForElementVisible('@HR_password', data.wait);
                       HRI1.click('@HR_password');
                       HRI1.setValue('@HR_password', data.pass_wordHR);
                       HRI1.waitForElementVisible('@HR_login', data.wait);
                       HRI1.click('@HR_login');
                       HRI1.waitForElementVisible('@HR_dashboard', data.wait)

                   });
               }
           });



           this.Then(/^user choose "upload a file tab" from "Employee" tab$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.pause(3000)
                       HRI1.waitForElementVisible('@HR_Employee', data.wait);
                       HRI1.click('@HR_Employee');
                       browser.pause(3000)
                       HRI1.waitForElementVisible('@HR_Upload_a_file', data.wait);
                       HRI1.click('@HR_Upload_a_file');
                       HRI1.waitForElementVisible('@HR_continue', data.wait);
                       HRI1.click('@HR_continue');
                   });
               };
           });
           this.Then(/^Upload the good file$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Trial', data.wait);
                       browser.useXpath()
                       browser.setValue('//input[@id="fileupload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\HRi\\HRI_Good file.xlsx'))
                       browser.pause(2000);
                       HRI1.waitForElementVisible('@HR_Upload', data.longWait);
                       HRI1.click('@HR_Upload');
                       browser.useXpath()
                       HRI1.waitForElementVisible('@HR_successmsg', data.longWait);
                       HRI1.getText('@HR_successmsg', function (actual) {
                           console.log(actual)
                       });
                   });
               };
           });

           this.Then(/^User check file upload successfully$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Uploaded', data.longWait);
                       HRI1.click('@HR_Uploaded');
                   });
               };
           });
           this.Then(/^Upload the file$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Trial', data.wait);
                       browser.useXpath()
                       browser.setValue('//input[@id="fileupload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\HRi\\HRI_Bad file.xlsx'))
                       browser.pause(2000);
                       HRI1.waitForElementVisible('@HR_Upload', data.longWait);
                       HRI1.click('@HR_Upload');
                       browser.useXpath()
                       HRI1.waitForElementVisible('@HR_errormsg', data.longWait);
                       HRI1.getText('@HR_errormsg', function (actual) {
                           console.log(actual)
                       });
                       });
               };
           });

           this.Then(/^Upload the file2$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Trial', data.wait);
                       browser.useXpath()
                       browser.setValue('//input[@id="fileupload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\hri 2\\HRI_error file.xlsx'))
                       browser.pause(2000);
                       HRI1.waitForElementVisible('@HR_Upload', data.longWait);
                       HRI1.click('@HR_Upload');
                       browser.useXpath()
                       HRI1.waitForElementVisible('@HR_errormsg', data.longWait);
                       HRI1.getText('@HR_errormsg', function (actual) {
                           console.log(actual)
                       });
                   });
               };
           });

           this.Then(/^User click on error tab$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.refresh();
                       browser.useXpath()
                       HRI1.waitForElementVisible('@HR_Error', data.longWait);
                       HRI1.click('@HR_Error');
                       browser.useXpath()
                       HRI1.waitForElementVisible('@count_3', data.longWait);
                       HRI1.getText('@count_3', function (actual) {
                           console.log('Total number of errors='+ actual.value)
                       });

                   });
               };
           });

           this.Then(/^User click on error tab after clicking on undo tab$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.useXpath()
                       browser.pause(5000)
                       HRI1.waitForElementVisible('@HR_Error', data.longWait);
                       HRI1.click('@HR_Error');
                       browser.useXpath()
                       HRI1.waitForElementVisible('@count_3', data.longWait);
                       HRI1.getText('@count_3', function (actual) {
                           console.log('Total number of errors after undo skipped error ='+ actual.value)
                       });
                       browser.pause(5000)
                   });
               };
           });


           this.Then(/^User Skip the error record for one participant$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@skip_first_error', data.longWait);
                       HRI1.click('@skip_first_error');
                       browser.useXpath()
                       browser.pause(15000)
                       HRI1.waitForElementVisible('@count_3', data.longWait);
                       HRI1.getText('@count_3', function (actual) {
                           console.log('Total number of errors after skipped one participant error ='+ actual.value)
                       });
                       browser.useXpath()
                       HRI1.waitForElementVisible('@count_4', data.longWait);
                       HRI1.getText('@count_4', function (actual) {
                           console.log('Total number of Skipped errors='+ actual.value)
                       });
                       browser.pause(3000)
                   });
               };
           });
           this.Then(/^User undo the skip error record for that participant$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.useXpath()
                       HRI1.waitForElementVisible('@skipped_tab', data.longWait);
                       HRI1.click('@skipped_tab');
                       HRI1.waitForElementVisible('@undo_tab', data.longWait);
                       HRI1.click('@undo_tab');
                       //browser.pause(7000)
                       browser.refresh()
                       // HRI1.waitForElementVisible('@undo_tab_msg', data.longWait);
                       // browser.useXpath()
                       // HRI1.getText('@undo_tab_msg', function (actual) {
                       //     console.log(actual)
                       //     browser.refresh()
                   });
               };
           });


           this.Then(/^User click on Skip remaining error tab$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@skip_errors', data.longWait);
                       HRI1.click('@skip_errors');
                       HRI1.waitForElementVisible('@confirmation', data.longWait);
                       HRI1.click('@confirmation');
                       HRI1.waitForElementVisible('@skipped_msg', data.longWait);
                       HRI1.getText('@skipped_msg', function (actual) {
                           console.log(actual)
                       });


                   });
               };
           });


           this.Then(/^User upload the new remidiated file$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@upload_remidiated_file', data.wait);
                      // HRI1.click('@upload_remidiated_file');
                       browser.useXpath()
                       browser.setValue('//input[@id="fileuploadRemediated"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\hri 2\\HRI_Good file.xlsx'))
                       browser.pause(2000);

                   });
               };
           });



           this.Then(/^User click on error and remidiate them 1$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Error', data.longWait);
                       HRI1.click('@HR_Error');
                       HRI1.waitForElementVisible('@HR_Error_1', data.longWait);
                       HRI1.click('@HR_Error_1');
                       HRI1.waitForElementVisible('@HR_Error1', data.longWait);
                       browser.useXpath()
                       HRI1.click('@HR_Error1');
                       HRI1.waitForElementVisible('@new_eff_date', data.longWait);
                       HRI1.click('@new_eff_date');
                       HRI1.waitForElementVisible('@HR_Error2', data.longWait);
                       HRI1.click('@HR_Error2');
                       HRI1.setValue('@HR_Error2',data.first_name);
                       HRI1.waitForElementVisible('@HR_Error3', data.longWait);
                       HRI1.click('@HR_Error3');
                       HRI1.setValue('@HR_Error3',data.gender);
                       HRI1.waitForElementVisible('@save', data.longWait);
                       HRI1.click('@save');
                       browser.pause(7000)
                       HRI1.waitForElementVisible('@HR_Trial', data.wait);
                       browser.refresh()

                   });
               };
           });

           this.Then(/^User click on error and remidiate them 2$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Error', data.longWait);
                       HRI1.click('@HR_Error');
                       HRI1.waitForElementVisible('@HR_Error_1', data.longWait);
                       HRI1.click('@HR_Error_1');
                       HRI1.waitForElementVisible('@HR_Error1', data.longWait);
                       browser.useXpath()
                       HRI1.click('@HR_Error1');
                       HRI1.setValue('@HR_Error1',data.first_name1);
                       HRI1.waitForElementVisible('@HR_Error2', data.longWait);
                       HRI1.click('@HR_Error2');
                       HRI1.setValue('@HR_Error2',data.gender1);
                       HRI1.waitForElementVisible('@save', data.longWait);
                       HRI1.click('@save');
                       browser.pause(7000)
                       HRI1.waitForElementVisible('@HR_Trial', data.wait);
                   });
               };
           });
           this.Then(/^User click on error and remidiate them 3$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@HR_Error', data.longWait);
                       HRI1.click('@HR_Error');
                       HRI1.waitForElementVisible('@HR_Error_1', data.longWait);
                       HRI1.click('@HR_Error_1');
                       HRI1.waitForElementVisible('@HR_Error2', data.longWait);
                       browser.useXpath()
                       HRI1.click('@HR_Error2');
                       HRI1.waitForElementVisible('@new_eff_date', data.longWait);
                       HRI1.click('@new_eff_date');
                       HRI1.waitForElementVisible('@HR_Error4', data.longWait);
                       HRI1.click('@HR_Error4');
                       HRI1.setValue('@HR_Error4', data.pincode)
                       HRI1.waitForElementVisible('@save', data.longWait);
                       HRI1.click('@save');
                       browser.pause(5000)
                       browser.refresh()

                   });
               };
           });
           this.Then(/^User checks that after remidiation file will be successfully uploaded$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.pause(3000)
                       HRI1.waitForElementVisible('@HR_successmsg', data.longWait);
                       HRI1.getText('@HR_successmsg', function (actual) {
                           console.log(actual)
                       });
                   });
               };
           });
           this.Then(/^User click on export file of errors$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@export_error_file', data.longWait);
                       HRI1.click('@export_error_file');
                       });
               };
           });


////////////////////////12/////////////////////////


       this.Then(/^Upload the error file$/, function () {
           browser = this;
           var URL1 ;
           var execEnv = data["TestingEnvironment"];
           console.log('Test Environment: ' + execEnv);
           if (execEnv.toUpperCase() == "QA") {
               initializePageObjects(browser, function () {
                   HRI1.waitForElementVisible('@HR_Trial', data.wait);
                   browser.useXpath()
                   browser.setValue('//input[@id="fileupload"]', require('path').resolve('C:\\Users\\Amit-r-singh\\Desktop\\atomation\\HRi\\HRI_Bad file2.xlsx'))
                   browser.pause(2000);
                   HRI1.waitForElementVisible('@HR_Upload', data.longWait);
                   HRI1.click('@HR_Upload');
                   browser.useXpath()
                   HRI1.waitForElementVisible('@HR_errormsg', data.longWait);
                   HRI1.getText('@HR_errormsg', function (actual) {
                       console.log(actual)
                   });
               });
           };
       });
           this.Then(/^User Skip the error record for one participant 12$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       HRI1.waitForElementVisible('@skip_first_error', data.longWait);
                       HRI1.click('@skip_first_error');
                       HRI1.waitForElementVisible('@confirmation', data.longWait);
                       HRI1.click('@confirmation');
                       browser.useXpath()
                       browser.pause(10000)
                       HRI1.waitForElementVisible('@count_3', data.longWait);
                       HRI1.getText('@count_3', function (actual) {
                           console.log('Total number of errors after skipped one participant error ='+ actual.value)
                       });
                       browser.useXpath()
                       HRI1.waitForElementVisible('@count_4', data.longWait);
                       HRI1.getText('@count_4', function (actual) {
                           console.log('Total number of Skipped errors='+ actual.value)
                       });
                       browser.refresh()
                   });
               };
           });
           this.Then(/^User click on error tab "Error"$/, function () {
               browser = this;
               var URL1 ;
               var execEnv = data["TestingEnvironment"];
               console.log('Test Environment: ' + execEnv);
               if (execEnv.toUpperCase() == "QA") {
                   initializePageObjects(browser, function () {
                       browser.useXpath()
                       browser.pause(5000)
                       HRI1.waitForElementVisible('@HR_Error', data.longWait);
                       HRI1.click('@HR_Error');
                       browser.useXpath()
                       HRI1.waitForElementVisible('@count_3', data.longWait);
                       HRI1.getText('@count_3', function (actual) {
                           console.log('Total number of errors after undo skipped error ='+ actual.value)
                       });
                       browser.pause(5000)
                   });
               };
           });

       };