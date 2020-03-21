
//module.exports = {
// sections: {
//SaucelabDashboardPage: {
//  selector: 'body',
//  elements: {
//QAF
// SaucelabImage: {selector: "span[class='ok7m  _2gT1']"},
/* Login: {selector: "svg[viewbox='0 0 32 32']"},
 GoogleSearchButton: {selector: "input[name='btnK']"},
 SeleniumImage: {selector: "#uid_dimg_0"},
 ClickSelenium: {selector: "ul[role='listbox'] li:nth-child(1) div:nth-child(2)"},*/
//  ClickSignIn: {locateStrategy: 'xpath',selector: "//a[@class='MSz5 _1QSO hidden-sm-down']"},
//login page

//  Username: {locateStrategy:'xpath',selector: "//input[@name='username']"},
//    Password: {locateStrategy:'xpath',selector: "//input[@name='password']"},
//     SignIn: {locateStrategy:'xpath',selector: "//button[@id='submit']"},
//     DashBoardImg: {locateStrategy:'xpath',selector: "//a[@class='sidebar-control-logo']"},
//     Account: {locateStrategy:'xpath',selector: "//div[contains(text(),'Sagar H')]"},
//     MyAccount: {locateStrategy:'xpath',selector: "(//span[contains(text(),'My Account')])[2]"},
//     ShowButton : {locateStrategy:'xpath',selector: "//a[@class='btn btn-action acbtn']"},
//     PassWord1 : {locateStrategy:'xpath',selector: "//input[@name='password']"},
//     Authorize: {locateStrategy:'xpath',selector: "//button[@class='btn btn-action btn-sm']"},
//     Clipboard: {locateStrategy:'xpath',selector: "//span[@class='clipboard-icon']"},
//     Signout:  {locateStrategy:'xpath',selector: "(//button[@class='btn btn-link link'])[2]"}
//    },
//   }
// }}

module.exports = {
    sections: {
        CricPage: {
            selector: 'body',
            elements: {
                cricbuzzlogo: {locateStrategy:'xpath',selector: "//a[@class='cb-hm-text']"},
                Series: {locateStrategy:'xpath',selector: "(//span[@class='cb-caret-down'])[2]"},
                Newz: {locateStrategy:'xpath',selector: "(//nav[@class='cb-sub-navigation'])[2]/a[1]"},
                ScheduleResults: {locateStrategy:'xpath',selector: "(//a[@class='cb-nav-tab'])[1]"},
                //  Team: {locateStrategy:'xpath',selector: "(//span[@class='cb-caret-down cb-sch-filt-drop'])[2]"},
                India: {locateStrategy:'xpath',selector: "(//a[contains(text(),'India won by 6 runs')])[2]"},
                ScoreCard: {locateStrategy:'xpath',selector: "//a[contains(text(),'Scorecard')]"},
                HardikSR: {locateStrategy:'xpath',selector: "//div[@id='innings_1']/div[1]/div[8]/div[7]"},
                TomBruce: {locateStrategy:'xpath',selector: "//div[@id='innings_2']/div[1]/div[9]/div[3]"},
                //  abc: {locateStrategy:'xpath',selector: "//div[@id='innings_2']/div[1]/div[9]/div[3]"},

            },
        }
    }}