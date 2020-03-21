var data = require('../../TestResources/GlobalTestData.js');
//var Objects = require(__dirname + '/../../repository/MercerUSBenPages.js');
//var robot = require('robot-js');
//var mailer = require("nodemailer");
var clipboard = require('copy-paste');

var LoginPage,DashboardPage, HrProxyPage, DocumentLibraryPage, AddClientpage;


    //var HarmonisePage = browser.page.MercerUSBenPages();
//
    ////page = HarmonisePage.section;
    //LoginPage = HarmonisePage.section.LoginPage;
    //LifeEventPage = HarmonisePage.section.LifeEventPage;
    //MyInformationPage = HarmonisePage.section.MyInformationPage;
    //HelpFindAPlanPage = HarmonisePage.section.HelpFindAPlanPage;
    ////DashboardPage = HarmonisePage.section.DashboardPage;
    //var BPPage = browser.page.BrokerPortalPages();
    //LoginPage = BPPage.section.LoginPageBP;
    //DashboardPage= BPPage.section.DashboardPageBP;
    //callback();
    function initializePageObjects(browser, callback) {
        var BPPage = browser.page.BrokerPortalPages();
        LoginPage = BPPage.section.LoginPageBP;
        DashboardPage= BPPage.section.DashboardPageBP;
        HrProxyPage=BPPage.section.HrPortalProxyPage;
        DocumentLibraryPage=BPPage.section.DocLibraryPage;
        AddClientpage=BPPage.section.AddClientPage;
        callback();
    }


module.exports = function(){

    this.Given(/^Once User is logged in using "([^"]*)" in MBC Applications$/, function (userType1) {
        var URL;
        browser = this;
        var execEnv = data["TestingEnvironment"];
        console.log('Test Environment: ' + execEnv);
        if (execEnv.toUpperCase() == "MBCQA3") {
            URL = data.urlMBCQA3;
            var userDB = data.UserMBCQA3[userType1]
           // temp=1;
            initializePageObjects(browser, function () {
                browser.maximizeWindow()
                    .deleteCookies()
                    .url(URL);
                browser.timeoutsImplicitWait(30000);
                LoginPage.waitForElementVisible('@inputUsername', data.longWait)
                LoginPage.setValue('@inputUsername', userDB.username)
                LoginPage.waitForElementVisible('@inputPassword', data.longWait)
                LoginPage.setValue('@inputPassword', userDB.password)
                LoginPage.click('@buttonLogin', function () {
                LoginPage.waitForElementVisible('@EstimateNowButton', data.LoginWait)
                    });


            });
        }
        else if(execEnv.toUpperCase() == "SMALLMARKET")        {

            URL = data.urlSmallMarket;
            var userDB1 = data.UserSmallMarket[userType1]
            initializePageObjects(browser, function () {
                browser.maximizeWindow()
                    .deleteCookies()
                    .url(URL);
                browser.timeoutsImplicitWait(30000);
                LoginPage.waitForElementVisible('@inputUsernameSM', data.longWait)
                LoginPage.setValue('@inputUsernameSM', userDB1.usernameSM)
                LoginPage.waitForElementVisible('@inputPasswordSM', data.longWait)
                LoginPage.setValue('@inputPasswordSM', userDB1.passwordSM)
                LoginPage.click('@ContinueButtonSM', function () {
                LoginPage.waitForElementVisible('@JustForYouTile', data.longWait)
                 });


            });
        }
        else if(execEnv.toUpperCase() == "LARGEMARKET")        {

            URL = data.urlLargeMarket;
            initializePageObjects(browser, function () {
                browser.maximizeWindow()
                    .deleteCookies()
                    .url(URL);
                browser.timeoutsImplicitWait(30000);
                LoginPage.waitForElementVisible('@EstimateNowButton', data.longWait);
            });
        }
    });

    this.When(/^User navigates to the life events page$/, function () {
        var URL;
        browser = this;
        var execEnv = data["TestingEnvironment"];
        if (execEnv.toUpperCase() == "MBCQA3") {
            //var userDB = data.UserMBCQA3[userType1]
            LifeEventPage.waitForElementPresent("@MenuButton", data.longWait)
                .click("@MenuButton")
                .waitForElementPresent("@LifeEventLink", data.longWait)
                .click("@LifeEventLink");

                getWebElementsCount("LifeEventPage|BirthGetStartedLink", function (display_status) {
                console.log(display_status);
                if (display_status == true) {
                    LifeEventPage.waitForElementPresent("@BirthGetStartedLink", data.longWait);
                }
                else if (display_status == false) {
                    LifeEventPage.waitForElementPresent('@CancelLifeEventButton', data.longWait)
                        .click('@CancelLifeEventButton')
                        .waitForElementPresent('@CancelLEOverlay', data.longWait)
                        .click('@CancelLEOverlay')
                        .waitForElementPresent("@BirthGetStartedLink", data.LoginWait);
                }
            });
        }
        else if (execEnv.toUpperCase() == "SMALLMARKET") {
            //var userDB = data.UserMBCQA3[userType1]
            LifeEventPage.waitForElementPresent("@MenuButton", data.longWait)
                .click("@MenuButton")
                .waitForElementPresent("@LifeEventLink", data.longWait)
                .click("@LifeEventLink");

            getWebElementsCount("LifeEventPage|BirthGetStartedLink", function (display_status) {
                console.log(display_status);
                if (display_status == true) {
                    LifeEventPage.waitForElementPresent("@BirthGetStartedLink", data.longWait);
                }
                else if (display_status == false) {
                    LifeEventPage.waitForElementPresent('@CancelLifeEventButton', data.longWait)
                        .click('@CancelLifeEventButton')
                        .waitForElementPresent('@CancelLEOverlay', data.longWait)
                        .click('@CancelLEOverlay')
                        .waitForElementPresent("@BirthGetStartedLink", data.LoginWait);
                }
            });
        }

    });

               //
           //     browser.timeoutsImplicitWait(30000);
           //     LoginPage.waitForElementVisible('@inputUsername', data.longWait)
           //     LoginPage.setValue('@inputUsername', userDB.username)
           //     LoginPage.waitForElementVisible('@inputPassword', data.longWait)
           //     LoginPage.setValue('@inputPassword', userDB.password)
           //     LoginPage.click('@buttonLogin', function () {
           //     //LoginPage.waitForElementVisible('@EstimateNowButton', data.longWait)
           //
//
//
           // });




    this.When(/^User starts a life event$/, function () {
        var URL;
        browser = this;
        LifeEventPage.waitForElementPresent("@BirthGetStartedLink",data.longWait)
            .click('@BirthGetStartedLink')
            .waitForElementPresent('@BirthAdoptionHeader',data.longWait)
            .waitForElementPresent('@LifeEventStartDate',data.longWait)
            .setValue('@LifeEventStartDate',data.LifeEventStartDate)
            .click('@GetStartedButton')
            .waitForElementPresent('@GetStartedTitle',240000)
            .waitForElementPresent('@NextButtonStartLE',data.longWait);
    });

    this.When(/^User adds Dependents in Whos Covered Page$/, function () {
        var URL;
        browser = this;

        LifeEventPage.click('@NextButtonStartLE')
            .waitForElementPresent('@WhosCoveredTitle',data.longWait)
            .waitForElementPresent('@AddDependentButton',data.longWait)
            .click('@AddDependentButton')
            .waitForElementPresent('@DependentContinueButton',data.longWait)
            .click('@DependentContinueButton')

        //Adding dependents:
            .waitForElementPresent('@FirstNameTextbox',data.longWait)
            .setValue('@FirstNameTextbox',data.FirstnameAddDep)
            .waitForElementPresent('@LastNameTextbox',data.longWait)
            .setValue('@LastNameTextbox',data.LastnameAddDep)
            .waitForElementPresent('@DOBTextbox',data.longWait)
            .setValue('@DOBTextbox',data.DOBAddDep)
            .waitForElementPresent('@SSNTextbox',data.longWait)
            .setValue('@SSNTextbox',data.SSNAddDep)
            .waitForElementPresent('@LiveAtSameAddCheckbox',data.longWait)
            .click('@MaleRadioButton')
            .waitForElementPresent('@RelationshipDropdown',data.longWait)
            .click('@RelationshipDropdown')
            .waitForElementPresent('@ChildDropdown',data.longWait)
            .click('@ChildDropdown')
            .click('@LiveAtSameAddCheckbox')
            .click('@DependentAgreementCheckbox')
            .click('@SaveButtonDependent')
            .waitForElementPresent('@WhosCoveredContinueButton',data.LoginWait)
            .click('@WhosCoveredContinueButton');
    });

    this.When(/^User fills the My Information Page$/, function () {
        var URL;
        browser = this;

        MyInformationPage.waitForElementPresent('@MyInformationTitle',data.longWait)
            .click('@ContinueButton');

    });

    this.When(/^User fills the Help Me Find Plans Page$/, function () {
        var URL;
        browser = this;

        HelpFindAPlanPage.waitForElementPresent('@HelpFindPlanTitle',data.longWait)
        getWebElementsCount("HelpFindAPlanPage|SkipButton", function (display_status) {
            console.log(display_status);
            if (display_status == true) {
                HelpFindAPlanPage.waitForElementPresent("@SkipButton", data.longWait)
                    .click('@SkipButton');
            }
            else if (display_status == false) {
                LifeEventPage.waitForElementPresent('@ContinueButton', data.longWait)
                    .click('@ContinueButton');
            }
        });

    });

    this.When(/^Select "([^"]*)" in "([^"]*)" dropdown$/, function (value, locator) {
        //selectDropdown(locator, value, function (callback) {})
        selectWithVisibleText(locator, value, function (selected) {
            browser.pause(1000);
        });
    });

    this.When(/^Enter "([^"]*)" field with "([^"]*)" value$/, function (locator, value) {
        setText(locator, value)
    });














    this.When(/^Mail the User$/, function () {

        //1st option

        // Use Smtp Protocol to send Email
        var smtpTransport = mailer.createTransport("SMTP",{
            service: "Gmail",
            auth: {
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: "subhajit331992@gmail.com",
                    pass: "3124278SS$"
                })
            }
        });

        var mail = {
            from: "dnd@mercer.com",
            to: "subhajit.chakraborty@lntinfotech.com",
            subject: "Send Email Using Node.js",
            text: "Node.js New world for me",
            html: "<b>Node.js New world for me</b>"
        }

        smtpTransport.sendMail(mail, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            smtpTransport.close();
        });


        //2nd Option:

        /*
         var smtpConfig = {
         //host: 'nasa1smtp.mmc.com',
         //port: 25,
         //secure: false, // use SSL
         //ignoreTLS: false,
         host: 'nasa1smtp.mmc.com',
         port: 25,
         secure: false, // use SSL
         ignoreTLS: false,
         tls: {rejectUnauthorized: false},
         //StartTLS = true,


         auth: {
         //domain: 'MERCER',
         //workstation: 'windows-workstation',
         user: 'subhajit.chakraborty@mercer.com',
         pass: 'winfeb@123'
         },
         //tls: {
         //    ciphers: 'SSLv3'
         //}
         };
         var transporter = mailer.createTransport(smtpConfig);
         var text = 'Hello world from \n\n';
         var mailOptions = {
         from: 'DND@mercer.com', // sender address
         to: 'subhajit.chakraborty@lntinfotech.com', // list of receivers
         subject: 'Email Example', // Subject line
         text: text //, // plaintext body
         // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
         };
         transporter.sendMail(mailOptions, function(error, info){
         if(error){
         console.log(error);

         }else{
         console.log('Message sent: ' + info.response);

         };
         });

         */

//3rd Option
        /*
         var sendmail = require('sendmail')({
         logger: {
         debug: console.log,
         info: console.info,
         warn: console.warn,
         error: console.error
         },
         silent: false,
         dkim: { // Default: False
         privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
         keySelector: 'mydomainkey'
         },
         devPort: 1025 // Default: False
         })

         var sendmail1 = require('sendmail')();

         sendmail({
         from: 'no-reply@yourdomain.com',
         to: 'subhajit.chakraborty@lntinfotech.com ',
         subject: 'test sendmail',
         html: 'Mail of test sendmail ',
         }, function(err, reply) {
         console.log(err && err.stack);
         console.dir(reply);
         });
         */

        //4th Option
        /*
         var email 	= require('D:/Health_Automation/node_modules/emailjs');
         var server 	= email.server.connect({
         user:    "subhajit.chakraborty@mercer.com",
         password:"winfeb@123",
         host:    "nasa1smtp.mmc.com",
         ssl:     true,
         port: '25',
         tls: {ciphers: "SSLv3"},


         });

         // send the message and get a callback with an error or details of the message that was sent
         server.send({
         text:    "i hope this works",
         from:    "dnd@mercer.com",
         to:      "subhajit.chakraborty@mercer.com",
         cc:      "raghu.n@mercer.com",
         subject: "testing emailjs"
         }, function(err, message) { console.log(err || message); });
         */

        //5th Option Express-mailer

        /*
         var app = require('express')(),
         mailer = require('express-mailer');

         mailer.extend(app, {
         from: 'no-reply@example.com',
         host: 'nasa1smtp.mmc.com', // hostname      //smtp.gmail.com
         secureConnection: true, // use SSL
         port: 25, // port for secure SMTP    //465
         transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
         auth: {
         user: 'subhajit.chakraborty@mercer.com',
         pass: 'winfeb@123'
         }
         });
         app.get('/', function (req, res, next) {
         app.mailer.send('email', {
         to: 'subhajit.chakraborty@mercer.com,adithyan.cse@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
         subject: 'Test Email', // REQUIRED.
         otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
         }, function (err) {
         if (err) {
         // handle error
         console.log(err);
         res.send('There was an error sending the email');
         return;
         }
         res.send('Email Sent');
         });
         });
         */

    });



    //this.Given(/^Once User is logged in using "([^"]*)" to EWM application$/, function (userType) {
    //    var URL;
    //    browser = this;
    //    var execEnv = data["TestingEnvironment"];
    //    console.log('Test Environment: ' +execEnv);
    //    if(execEnv.toUpperCase() == "QA") {
    //        URL = data.urlEWMQA;
    //        var userDB = data.usersQA[userType]
    //    }
    //    else{
    //        URL = data.urlHarmoniseUAT
    //        var userDB = data.usersUAT[userType]
    //    }
    //    initializePageObjects(browser, function () {
    //        browser.maximizeWindow()
    //            .deleteCookies()
    //            .url(URL);
    //        browser.timeoutsImplicitWait(30000);
    //        LoginPage.waitForElementVisible('@inputUsername', data.longWait);
    //        LoginPage.setValue('@inputUsername', userDB.username);
//
    //        LoginPage.waitForElementVisible('@inputPassword', data.longWait);
    //        LoginPage.setValue('@inputPassword', userDB.password);
    //        LoginPage.click('@buttonLogin', function () {
    //           // HomePage.waitForElementVisible('@labelGreeting', data.longWait)
    //        });
    //    });
    //});
//
//
    //this.Given(/^User verifies"([^"]*)" contains number$/, function (locator) {
    //    browser = this;
    //    var pageAndObject = locator.split("|");
    //    var pg = pageAndObject[0];
    //    var object = '@'+pageAndObject[1];
    //    page[pg].getValue(object, function(result) {
    //        var test=result.value;
    //        function hasNumbers(t)
    //        {
    //            return /\d/.test(t);
    //        }
    //    });
    //});
//
    //this.When(/^User Clicks on "([^"]*)" Link or Button$/, function (locator) {
    //    performClick(locator, function () {
    //        browser.pause(1000);
    //    });
    //});
//
    //this.Then(/^"([^"]*)" page or message should be displayed$/, function(locator){
    //    isDisplayed(locator, function () {
    //        browser.pause(1000)
    //    });
    //});
//
    //this.Given(/^User verifies "([^"]*)" contains Value "([^"]*)"$/, function (locator,Value) {
    //    browser = this;
    //    var pageAndObject = locator.split("|");
    //    var pg = pageAndObject[0];
    //    var object = '@'+pageAndObject[1];
    //    page[pg].expect.element(object).to.have.value.which.contains(Value);
//
    //});
//
    //this.When(/^Enter "([^"]*)" field with "([^"]*)" value$/, function (locator, value) {
    //    setText(locator, value)
    //});
//

//
    //this.When(/^Randomly select in "([^"]*)" dropdown$/, function (locator, callback) {
    //    selectRandomly(locator, function (selectedValue) {
    //        callback(selectedValue);
    //    });
    //});
//
    //this.When(/^Select "([^"]*)" in "([^"]*)" dropdown as user$/, function (value, locator) {
    //    selectDropdownUI(locator, value);
    //});
//
    //this.Then(/^"([^"]*)" alert should be displayed$/, function(txt){
    //    verifyAlert(txt, this);
    //});
//
    //this.Then(/^"([^"]*)" page or message should not be displayed$/, function (locator) {
    //    isNotDisplayed(locator, function () {
    //        browser.pause(1000)
    //    });
    //});
//
    //this.Then(/^"([^"]*)" page or message should not be present$/, function (locator) {
    //    isNotPresent(locator, function () {
    //        browser.pause(1000)
    //    });
    //});
//
    //this.Then(/^"([^"]*)" field should be in disabled state$/, function (locator) {
    //    isDisabled(locator, function () {
    //        browser.pause(1000)
    //    });
    //});
//
    //this.Given(/^User is on the Health Page$/, function () {
    //    browser = this;
    //    performClick("HomePage|linkMenu", function () {
    //        performClick("HomePage|linkHealthMenuSelect", function () {
    //            isDisplayed("HealthSummaryPage|chartHeartMeter", function () {
    //            });
    //        });
    //    });
    //});
//
    //this.Given(/^Once the user navigate to Money page$/, function () {
    //    browser = this;
    //    performClick("HomePage|linkMenu1", function () {
    //        performClick("HomePage|linkMoneyMenuSelect", function () {
    //            isDisplayed("PensionPage|labelPensionSandboxPage", function () {
    //            });
    //        });
    //    });
    //});
//
    //this.Given(/^Once the user navigate to Profile page$/, function () {
    //    browser = this;
    //    var objLocation = Objects.sections.ProfilePage.elements.userProfileDDMenu.selector;
    //    var locateStrategy = Objects.sections.ProfilePage.elements.userProfileDDMenu.locateStrategy;
//
    //    if (locateStrategy == 'xpath') {
    //        browser.useXpath().moveToElement(objLocation, 0, 0);
    //    } else {
    //        browser.useCss().moveToElement(objLocation, 0, 0);
    //    }
    //    browser.mouseButtonDown(0);
    //    performClick("ProfilePage|userProfileLink", function () {
    //        isDisplayed("ProfilePage|labelProfilePageAboutMe", function () {
    //        });
    //    });
    //    browser.mouseButtonUp(0);
//
    //});
//
    //this.Given(/^Enter in "([^"]*)" from data sheet "([^"]*)"$/, function (locator, dataObject) {
    //    var arr = dataObject.split("|");
    //    var obj = arr[0];
    //    var field = arr[1];
    //    if ((data.TestingEnvironment).toUpperCase() == "QA") {
    //        var value = data.usersQA_V2[obj][field];
    //    } else {
    //        var value = data.usersUAT_V2[obj][field];
    //    }
    //    console.log(value);
    //    setText(locator, value);
    //});
//
    //this.Given(/^Verify "([^"]*)" field displays "([^"]*)" value$/, function (locator, expectedValue) {
    //    var arr = locator.split("|");
    //    if (arr[1].includes("input")) {
    //        verifyInputBoxText(locator, expectedValue);
    //    } else {
    //        verifyText(locator, expectedValue);
    //    }
    //});
}




var scroll = function (locator, callback) {
    var pageAndObject = locator.split("|");
    var pg = pageAndObject[0];
    var obj = '@'+pageAndObject[1];

    page[pg].getLocation(obj, function (position) {
        browser.execute(function (x, y) {
            window.scrollTo(x - 300, y - 300);
            return true
        }, [position.value.x, position.value.y]);
        callback();
    });
}

var verifyAlert = function (txt, browser) {
    browser.getAlertText(function (alertText) {
        browser.assert.equal(alertText.value, txt)
    });
    browser.acceptAlert();
}

var isDisplayed = function (locator, callback) {
    var pageAndObject = locator.split("|")
    var pg = pageAndObject[0];
    var object = '@'+pageAndObject[1];
    page[pg].waitForElementVisible(object, data.longWait, function () {
        callback();
    });
};

var isNotDisplayed = function (locator, callback) {
    browser.pause(data.shortWait);
    var pageAndObject = locator.split("|");
    var mpage = pageAndObject[0];
    var object = '@' + pageAndObject[1];
    page[mpage].waitForElementNotVisible(object, data.shortWait, function () {
        callback()
    })
};

var NavigateURL = function (value) {
    console.log(value);
    var money="money/";
    var execEnv = data["TestingEnvironment"];
    if(execEnv.toUpperCase() == "QA") {
        URL ="http://usdf23v0218.mrshmc.com:5002/";
        var res = URL+money+value;
        browser.url(res);
    }
    else{
        URL="https://harmonise.mercer.com/";
        var uat = URL+money+value;
        browser.url(uat);
    }
}
var elementDisplayedStatus = function (locator, callback) {
    var pageObject = locator.split("|");
    var locateStrategy = Objects.sections[pageObject[0]].elements[pageObject[1]].locateStrategy;
    var object = Objects.sections[pageObject[0]].elements[pageObject[1]].selector;
    var status;

    if (locateStrategy == 'xpath') locateStrategy = 'xpath';
    else locateStrategy = 'css selector';

    browser.element(locateStrategy, object, function (obj) {
        browser.elementIdDisplayed(obj.value.ELEMENT, function (object_displayed_status) {
            if (object_displayed_status.status == 'success') status = true;
            else status = false;
            callback(status);
        });
    });
};

var isNotPresent = function (locator, callback) {
    browser.pause(data.shortWait);
    var pageAndObject = locator.split("|");
    var mpage = pageAndObject[0];
    var object = '@' + pageAndObject[1];
    page[mpage].waitForElementNotPresent(object, data.shortWait, function () {
        callback()
    })
};

var getText = function (locator, callback) {
    if (locator.includes("|")) {
        var pageAndObject = locator.split("|")
        var mpage = pageAndObject[0]
        var object = '@' + pageAndObject[1]
        page[mpage].getText(object, function (result) {
            return callback(result.value)
        });
    } else {
        browser.useXpath().getText(locator, function (result) {
            return callback(result.value)
        });
    }
}

var setText = function (locator, content) {
    var pageAndObject = locator.split("|");
    var mpage = pageAndObject[0];
    var object = '@' + pageAndObject[1];
    var value = content.toString();
    page[mpage].clearValue(object);
    page[mpage].setValue(object, value);
}

var fnRandomEmailId = function (callback) {
    var max = 9, min = 0, str="", i;
    for(i=0; i < 5; i++){
        str = str + Math.floor(Math.random() * (max - min) + min);
    }
    return callback('email'+ str +'@mercer.com');
}

var fnRandomPhoneNumber = function (callback) {
    var max = 9, min = 0, str="", i;
    for(i=0; i < 10; i++){
        str = str + Math.floor(Math.random() * (max - min) + min);
    }
    return callback(str);
}

var wait_a_Second = function (callback) {
    browser.pause(data.shortWait, function () {
        callback();
    })
}

var wait_a_bit_long = function (callback) {
    browser.pause(data.longWait, function () {
        callback();
    })
}

var verifyText = function (locator, value) {
    var pageAndObject = locator.split("|");
    var mpage = pageAndObject[0];
    var object = '@' + pageAndObject[1];
    isDisplayed(locator, function () {
        page[mpage].getText(object, function (response) {
            console.log("Excepted: " + value);
            console.log("Actual: " + response.value);
            browser.assert.equal(response.value, value)
            if (response.value != value) {
                console.log("Text Content mismatch: ");
            }
        });
    });
};

var verifyInputBoxText = function (locator, value) {
    getInputBoxText(locator, function (inputBoxText) {
        console.log("Excepted: " + inputBoxText.toUpperCase());
        console.log("Actual: " + value.toUpperCase());
        browser.assert.equal(inputBoxText.toUpperCase(), value.toUpperCase())
        if (inputBoxText.toUpperCase() != value.toUpperCase()) {
            console.log("Text Content mismatch: ");
        }
    });
};

var verifyValuesEqual = function (msg, value1, value2) {
    console.log(msg);
    console.log('Expected: ' + value1);
    console.log('  Actual: ' + value2);
    browser.verify.equal(value1, value2);
}

var performClick = function (locator, callback) {
    var pageAndObject = locator.split("|");
    var mpage = pageAndObject[0];
    var object = '@'+pageAndObject[1];
    scroll(locator, function () {
        page[mpage].click(object);
        browser.pause(1000);
        callback();
    });
};

var verifyHidden=function (locator,Value) {
    var pageAndObject = locator.split("|")
    var pg = pageAndObject[0];
    var object = '@'+pageAndObject[1];
    page[pg].expect.element(object).to.have.value.which.contains(Value);

}


var fnRandomInteger = function (min, max, callback) {
    var random = min + Math.floor(Math.random() * (max - min + 1));
    return callback(random);
}

var selectDropdownUI = function(locator, value, callback) {
    var pageObject = locator.split("|");
    var mpage = pageObject[0];
    var object = '@' + pageObject[1];

    var options = Objects.sections[mpage].elements[pageObject[1]].selector;
    options = options + '//option[starts-with(text(),"' + value + '")]';
    page[mpage].click(object);
    browser.pause(1000);
    getText(options, function (selectedOptions) {
        browser.useXpath().waitForElementVisible(options, data.shortWait);
        browser.useXpath().click(options);
        browser.pause(1000);
        browser.useXpath().click(options);
        browser.pause(1000);
        browser.keys(browser.Keys.ENTER);
        browser.pause(1000);
        //callback(selectedOptions)
    });
};

var selectDropdown = function (locator, value) {
    var pageObject = locator.split("|");
    var identifier = Objects.sections[pageObject[0]].elements[pageObject[1]].selector;
    browser.execute(function (identifier, value) {
        var objSelect = document.getElementById(identifier);
        setSelectedValue(objSelect, value);
        function setSelectedValue(selectObj, valueToSet) {
            for (var i = 0; i < selectObj.options.length; i++) {
                if (selectObj.options[i].text== valueToSet) {
                    selectObj.options[i].selected = true;
                    return;
                }
            }
        }
    }, [identifier, value], function (result) {});
}

var selectWithVisibleText = function (locator, value, callback) {
    var pageObject = locator.split("|");
    var objLocation = Objects.sections[pageObject[0]].elements[pageObject[1]].selector;
    var locateStrategy = Objects.sections[pageObject[0]].elements[pageObject[1]].locateStrategy;
    var options_location, count;

    if (locateStrategy == 'xpath') {
        options_location = objLocation + '//option';
    } else {
        locateStrategy = 'css selector';
        options_location = objLocation + ' > option';
    }

    page[[pageObject[0]]].click('@' + pageObject[1]);

    browser.elements(locateStrategy, options_location, function (webElementsArray) {
        count = webElementsArray.value.length;
        webElementsArray.value.forEach(function (webEle) {
            browser.elementIdText(webEle.ELEMENT, function (ele) {
                if (ele.value == value) {
                    browser.elementIdClick(webEle.ELEMENT)
                    browser.pause(5000);
                    callback();
                }
            })
        });
    });

}

var selectRandomly = function (locator, callback) {
    var pageObject = locator.split("|");
    var objLocation = Objects.sections[pageObject[0]].elements[pageObject[1]].selector;
    var locateStrategy = Objects.sections[pageObject[0]].elements[pageObject[1]].locateStrategy;
    var options_location, count, i = 0;

    if (locateStrategy == 'xpath') {
        options_location = objLocation + '//option';
    } else {
        locateStrategy = 'css selector';
        options_location = objLocation + ' > option';
    }

    getInputBoxText(locator, function (selected_value) {
        page[[pageObject[0]]].click('@' + pageObject[1]);
        browser.elements(locateStrategy, options_location, function (webElementsArray) {
            count = parseInt(webElementsArray.value.length) - 1;
            fnRandomInteger(0, count, function (index) {
                webElementsArray.value.forEach(function (webEle) {
                    browser.elementIdText(webEle.ELEMENT, function (ele) {
                        if (i == parseInt(index)) {
                            if (ele.value == selected_value) {
                                selectRandomly(locator, function (data) {
                                    callback(data);
                                });
                            } else {
                                browser.elementIdClick(webEle.ELEMENT);
                                browser.pause(2000);
                                callback(ele.value);
                            }
                        }
                        i++;
                    })
                });
            });
        });
    });
}

var randomSelectDropdownUI = function (locator, callback) {
    var pageObject = locator.split("|");
    var mpage = pageObject[0];
    var object = '@' + pageObject[1];

    var options = Objects.sections[mpage].elements[pageObject[1]].selector;
    options = options + "//option";

    getWebElementsCount(options, function (count) {
        fnRandomInteger(1, parseInt(count), function (index) {
            options = "(" + options + ")[" + parseInt(index) + "]";
            page[mpage].click(object);
            browser.pause(1000);
            getText(options, function (selectedOptions) {
                browser.useXpath().waitForElementVisible(options, data.shortWait);
                browser.useXpath().click(options);
                browser.pause(1000);
                browser.useXpath().click(options);
                browser.pause(1000);
                browser.keys(browser.Keys.ENTER);
                browser.pause(1000);
                callback(selectedOptions)
            });
        });
    });
};

var randomSelectOtherThanSelected = function (locator, callback) {
    var pageObject = locator.split("|");
    var mpage = pageObject[0];
    var object = '@' + pageObject[1];

    var options = Objects.sections[mpage].elements[pageObject[1]].selector;
    options = options + "//option";

    getText(options, function (previous_selected) {
        getWebElementsCount(options, function (count) {
            fnRandomInteger(1, parseInt(count), function (index) {
                options = "(" + options + ")[" + parseInt(index) + "]";
                page[mpage].click(object);
                browser.pause(1000);
                getText(options, function (selectedOptions) {
                    browser.useXpath().waitForElementVisible(options, data.shortWait);
                    browser.useXpath().click(options);
                    browser.pause(1000);
                    browser.useXpath().click(options);
                    browser.pause(1000);
                    browser.keys(browser.Keys.ENTER);
                    browser.pause(1000);
                    if (previous_selected == selectedOptions)
                        randomSelectDropdownUI(locator, function (selected) {
                            callback(selected);
                        });
                    else
                        callback(selectedOptions);
                });
            });
        });
    });
};

var randomSelectDropdown = function (locator, callback) {
    var pageObject = locator.split("|");
    var mpage = pageObject[0];
    var object = pageObject[1];

    browser.element('xpath', Objects.sections[mpage].elements[object].selector, function (obj) {
        var objSelect = obj.value;
        browser.execute(function (objSelect) {

            var text = objSelect.options[objSelect.selectedIndex].text;
            var value = 'null';
            var ddlArray = new Array();
            for (var i = 0; i < objSelect.options.length; i++) {
                ddlArray[i] = objSelect.options[i].text;
            }

            while (true) {
                var index = Math.floor(Math.random() * (ddlArray.length - 1));
                if (ddlArray[index] != text) {
                    value = ddlArray[index];
                    break;
                }
            }

            setSelectedValue(objSelect, value);
            function setSelectedValue(selectObj, valueToSet) {
                for (var i = 0; i < selectObj.options.length; i++) {
                    if (selectObj.options[i].text == valueToSet) {
                        selectObj.options[i].selected = true;
                        return;
                    }
                }
            }

            setTimeout(function () {
            }, 2000);

            return objSelect.options[objSelect.selectedIndex].text;
        }, [objSelect], function (result) {
            callback(result.value)
        });
    });
}

var readListData = function (locator, callback) {
    var data = "", count = 0;
    var pageObject = locator.split("|");
    var mpage = pageObject[0];
    var object = pageObject[1];
    browser.elements('xpath', Objects.sections[mpage].elements[object].selector, function (webElementsArray) {
        count = webElementsArray.value.length;
        webElementsArray.value.forEach(function (webEle) {
            browser.elementIdText(webEle.ELEMENT, function (result) {
                count--;
                data = data + '-' + result.value
                if (count <= 0) {
                    data = data.substring(1, data.length);
                    callback(data);
                }
            });
        });
    });
};

var getWebElementsCount = function (locator, callback) {
    var count = 0;
    if (locator.includes("|")) {
        var pageObject = locator.split("|");
        var mpage = pageObject[0];
        var object = pageObject[1];
        browser.elements('xpath', Objects.sections[mpage].elements[object].selector, function (webElementsArray) {
            count = webElementsArray.value.length;
            callback(count);
        });
    } else {
        browser.elements('xpath', locator, function (webElementsArray) {
            count = webElementsArray.value.length;
            callback(count);
        });
    }

};

var readListDataOnlyDisplayedValues = function (locator, callback) {
    var data = "", count = 0;
    browser.elements('xpath', locator, function (webElementsArray) {
        count = webElementsArray.value.length;
        webElementsArray.value.forEach(function (webEle) {
            browser.elementIdText(webEle.ELEMENT, function (result) {
                count--;
                if (result.value != '' && result.value != undefined)
                    data = data + '-' + result.value
                if (count <= 0) {
                    data = data.substring(1, data.length);
                    callback(data);
                }
            });
        });
    });
};

var dragAndDropOverAnotherElement = function (webElement1, webElement2, callback) {
    var Object1 = Objects.sections[webElement1.split("|")[0]].elements[webElement1.split("|")[1]].selector;
    var Obj1locStrategy = Objects.sections[webElement1.split("|")[0]].elements[webElement1.split("|")[1]].locateStrategy;

    var Object2 = Objects.sections[webElement2.split("|")[0]].elements[webElement2.split("|")[1]].selector;
    var Obj2locStrategy = Objects.sections[webElement2.split("|")[0]].elements[webElement2.split("|")[1]].locateStrategy;

    browser.pause(1000);
    if (Obj1locStrategy == 'xpath') browser.useXpath();
    else browser.useCss();
    console.log(Object1)
    browser.moveToElement(Object1, 5, 5)
    browser.mouseButtonDown(0)
    browser.pause(1000);

    if (Obj2locStrategy == 'xpath') browser.useXpath();
    else browser.useCss();
    console.log(Object2)
    browser.moveToElement(Object2, 5, 5)
    browser.mouseButtonUp(0)
    browser.pause(2000);
    callback();
}

var getInputBoxText = function (locator, callback) {
    var pageAndObject = locator.split("|")
    var mpage = pageAndObject[0]
    var object = '@' + pageAndObject[1]
    page[mpage].getValue(object, function (result) {
        callback(result.value);
    })
}

var FocusOnFileNameInput = function (callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    var tabIndex = [];
    var times = 4;
    for (var i = 0; i < times; i++) {
        tabIndex.push(i + 1);
    }
    browser.pause(2000);
    k.click(robot.KEY_F3);
    k.click(robot.KEY_ENTER);
    browser.pause(1000);
    tabIndex.forEach(function (index) {
        setTimeout(function () {
            k.click(robot.KEY_TAB);
            browser.pause(1000);
            if (index == times) {
                k.click(robot.KEY_ENTER);
                browser.pause(4000);
                callback();
            }
        }, 2000);

    });
};

var pastePath = function (callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    k.press(robot.KEY_CONTROL);
    browser.pause(1000);
    k.click(robot.KEY_V);
    browser.pause(1000);
    k.release(robot.KEY_CONTROL);
    browser.pause(1000);
    k.click(robot.KEY_ENTER);
    browser.pause(2000);
    callback();
}

var NavigateToFolderLocation = function (callback) {
    browser.pause(2000);
    FocusOnTopFolderNavigator(function () {
        browser.pause(2000);
        pastePath(function () {
            callback();
        })
    })
}

var FocusOnTopFolderNavigator = function (callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    setTimeout(function () {
        k.click(robot.KEY_F4);
        browser.pause(1000);
        k.press(robot.KEY_CONTROL);
        browser.pause(1000);
        k.click(robot.KEY_A);
        browser.pause(1000);
        k.release(robot.KEY_CONTROL);
        browser.pause(1000);
        k.click(robot.KEY_BACKSPACE);
        browser.pause(2000);
        callback();
    }, 4000);
}

var TypeFileName = function (filename, callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    var keystoke = [];
    FocusOnFileNameInput(function () {
        browser.pause(2000);
        for (var i = 0, len = filename.length; i < len; i++) {
            if (filename[i] == '_') {
                keystoke.push("KEY_SLASH");
            } else if (filename[i] == '-') {
                keystoke.push("KEY_MINUS");
            } else {
                keystoke.push("KEY_" + filename[i].toUpperCase());
            }
        }
        var count = keystoke.length;
        keystoke.forEach(function (key) {
            k.click(robot[key]);
            count = count - 1;
            if (count < 1) {
                k.click(robot.KEY_ENTER);
                callback();
            }
        });
    })
}

var UploadFile = function (file, callback) {
    file = file.replace('\\', '/');
    var slashIndex = file.lastIndexOf('/');
    var path = file.substring(0, slashIndex);
    var filename = file.substring(parseInt(slashIndex) + 1, file.length);
    clipboard.copy(path, function () {
        browser.pause(2000);
        NavigateToFolderLocation(function () {
            browser.pause(2000);
            TypeFileName(filename, function () {
                browser.pause(2000);
                callback('File uploading Completed!!');
            });
        });
    });
};

var fnRandomDate = function (callback) {
    fnRandomInteger(1, 30, function (day) {
        fnRandomInteger(3, 12, function (month) {
            fnRandomInteger(1999, 2014, function (year) {
                if (parseInt(day) < 10) {
                    day = '0' + day;
                }
                if (parseInt(month) < 10) {
                    month = '0' + month;
                }
                var date = day + "/" + month + "/" + year;
                callback(date);
            })
        })
    })
}

var splitAndSort = function (input, callback) {
    var arr = input.split("-");
    arr = arr.sort();
    var output = "", count = 0;
    arr.forEach(function (each) {
        output = output + "-" + each;
        count++;
        if (count == arr.length) {
            output = output.replace("--", "-")
            output = output.substring(1, output.length);
            callback(output);
        }
    });
}

var getCheckboxState = function (locator, callback) {
    var pageObject = locator.split("|");
    var locateStrategy = Objects.sections[pageObject[0]].elements[pageObject[1]].locateStrategy;
    var object = Objects.sections[pageObject[0]].elements[pageObject[1]].selector;
    var status;

    if (locateStrategy == 'xpath') locateStrategy = 'xpath';
    else locateStrategy = 'css selector';

    browser.element(locateStrategy, object, function (obj) {
        browser.elementIdSelected(obj.value.ELEMENT, function (object_selected_status) {
            callback(object_selected_status.value);
        });
    });
}

var getObjectDimension = function (locator, callback) {
    var pageObject = locator.split("|");
    var locateStrategy = Objects.sections[pageObject[0]].elements[pageObject[1]].locateStrategy;
    var object = Objects.sections[pageObject[0]].elements[pageObject[1]].selector;

    if (locateStrategy == 'xpath') locateStrategy = 'xpath';
    else locateStrategy = 'css selector';

    browser.element(locateStrategy, object, function (obj) {
        browser.elementIdSize(obj.value.ELEMENT, function (obj_size) {
            callback(obj_size.value.height, obj_size.value.width);
        });
    });
};

module.exports.getCheckboxState = getCheckboxState;
module.exports.verifyValuesEqual = verifyValuesEqual;
module.exports.splitAndSort = splitAndSort;
module.exports.fnRandomDate = fnRandomDate;
module.exports.selectDropdownUI = selectDropdownUI;
module.exports.selectDropdown = selectDropdown;
module.exports.randomSelectDropdown = randomSelectDropdown;
module.exports.randomSelectDropdownUI = randomSelectDropdownUI;
module.exports.performClick = performClick;
module.exports.getText = getText;
module.exports.setText = setText;
module.exports.isDisplayed = isDisplayed;
module.exports.isNotDisplayed = isNotDisplayed;
module.exports.verifyText = verifyText;
module.exports.wait_a_Second = wait_a_Second;
module.exports.wait_a_bit_long = wait_a_bit_long;
module.exports.fnRandomPhoneNumber = fnRandomPhoneNumber;
module.exports.fnRandomEmailId = fnRandomEmailId;
module.exports.verifyAlert = verifyAlert;
module.exports.fnRandomInteger = fnRandomInteger;
module.exports.readListData = readListData;
module.exports.dragAndDropOverAnotherElement = dragAndDropOverAnotherElement;
module.exports.getInputBoxText = getInputBoxText;
module.exports.readListDataOnlyDisplayedValues = readListDataOnlyDisplayedValues;
module.exports.UploadFile = UploadFile;
module.exports.getWebElementsCount = getWebElementsCount;
module.exports.verifyInputBoxText = verifyInputBoxText;
module.exports.isNotPresent = isNotPresent;
module.exports.elementDisplayedStatus = elementDisplayedStatus;
module.exports.randomSelectOtherThanSelected = randomSelectOtherThanSelected;
module.exports.selectWithVisibleText = selectWithVisibleText;
module.exports.selectRandomly = selectRandomly;
module.exports.verifyHidden = verifyHidden;
module.exports.NavigateURL= NavigateURL;
module.exports.initializePageObjects= initializePageObjects;