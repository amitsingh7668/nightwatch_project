module.exports = {
    TestingEnvironment: 'MBCQA3',

    shortWait: 5000,
    longWait: 10000,
    urlMBCQA3: 'https://auth-qai.mercerbenefitscentral.com/mbcqa3/login.tpz',
    urlSmallMarket: 'https://ben-qaf3.mercerbenefitscentral.com/login',
    urlLargeMarket: 'https://ben-qaf3.mercerbenefitscentral.com/?clientid=FNCLIENTC&employeeid=117301055',



    UserMBCQA3: {
        MBCUser: {
            username: 'testmbc33125', password: 'Test0001' },
    },
    UserSmallMarket: {
        MBCUser: {
            usernameSM: 'Copy.Dress10@airfake.com', passwordSM: 'Test0001!' },
    },

   // usersQA_V2: {
   //     normalUser1: {
   //         username: 'zoetisqa09.eptest.admin2@gisqa.mercer.com', password: 'Welcome12',changedPassword: 'Welcome21'
   //     },
//
//
   // },

};


  /*    usersQA_V2: {
        normalUser1: {
            username: 'zoetisqa09.eptest.admin2@gisqa.mercer.com', password: 'Welcome12',changedPassword: 'Welcome21'
        },
        normalUser: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome123'},
        userWithActiveGoals: {username: 'hcaqa06.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},
        returningUser: {username: 'hcaqa06.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},
        firstTimeUser: {username: 'q2qa11.eptest.admin2@gisqa.mercer.com', password: 'Welcome1'},
        changePasswordUser: {
            username: 'ballinaqa56.eptest.admin2@gisqa.mercer.com',
            password: 'Welcome4',
            changedPassword: 'Welcome5'
        },
        pensionReturnUser: {username: 'ballinaqa23.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'},
        pensionNewUser: {username: 'ballinaqa58.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'},
        pensionOtherReturnUser: {username: 'rambollua01.eptest.admin2@gisqa.mercer.com', password: 'Welcome12'},
        dashboardNewUser: {username: 'musgraveqa10.eptest.admin2@gisqa.mercer.com', password: 'Welcome1'},
        //Money New User
        moneyNewUser: {username: 'hcaqa06.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money Return User
        //moneyReturnUser: {username: 'hpirlqa19.eptest.admin2@gisqa.mercer.com', password: 'Welcome1'},
        moneyReturnUser: {username: 'ballinaqa23.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'},

        //Money-Dashboard
        MoneyDashboard: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Awareness
        MoneyAwarenessUser: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money_Assets
        MoneyAssetUser: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Income
        moneyIncome: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        // Money - Insights
        MoneyInsights: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Savings
        MoneySavings: {username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Debts
        MoneyDebtsUser:{username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Outgoings
        MoneyOutgoingUser:{username: 'q2qa02.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'}

    },

    //UAT-Users
    usersUAT_V2: {
        normalUser: {
            username: 'testu1.prasad.parameswaran@gisqa.mercer.com', password: 'Mercer@12346'
        }
        ,
        userWithActiveGoals: {
            username: 'hcaqa06.eptest.admin2@gisqa.mercer.com',
            password: 'Welcome2',
        }
        ,
        returningUser: {
            username: 'hcaqa06.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        firstTimeUser: {
            username: 'q2qa11.eptest.admin2@gisqa.mercer.com', password: 'Welcome1'
        }
        ,
        changePasswordUser: {
            username: 'vantanavicius@exadel.com',
            password: 'Testing321',
            changedPassword: 'Testing123'
        }
        ,
        pensionReturnUser: {
            username: 'ballinaqa23.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'
        }
        ,
        pensionNewUser: {
            username: 'ballinaqa58.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'
        }
        ,
        pensionOtherReturnUser: {
            username: 'rambollua01.eptest.admin2@gisqa.mercer.com', password: 'Welcome12'
        }
        ,
        //Money- New User
        moneyNewUser: {
            username: 'zoetisua10.eptest.admin2@gisqa.mercer.com', password: 'Welcome3'
        }
        ,
        //Money-Return User
        moneyReturnUser: {
            username: 'q2ua16.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money-Dashboard
        MoneyDashboard: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money_Assets
        MoneyAssetUser: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money-Return User
        moneyInsuranceUser: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money-Awareness
        MoneyAwarenessUser: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        },
        // Money - Income
        MoneyInsights: {username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Savings
        MoneySavings: {username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Debts
        MoneyDebtsUser:{username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Outgoings
        MoneyOutgoingUser:{username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'}

    },

    //PROD Users
    usersPROD_V2: {
        normalUser: {
            username: 'testu1.prasad.parameswaran@gisqa.mercer.com', password: 'Mercer@12346'
        }
        ,
        userWithActiveGoals: {
            username: 'hcaqa06.eptest.admin2@gisqa.mercer.com',
            password: 'Welcome2',
        }
        ,
        returningUser: {
            username: 'hcaqa06.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        firstTimeUser: {
            username: 'q2qa11.eptest.admin2@gisqa.mercer.com', password: 'Welcome1'
        }
        ,
        changePasswordUser: {
            username: 'vantanavicius@exadel.com',
            password: 'Testing321',
            changedPassword: 'Testing123'
        }
        ,
        pensionReturnUser: {
            username: 'ballinaqa23.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'
        }
        ,
        pensionNewUser: {
            username: 'ballinaqa58.eptest.admin2@gisqa.mercer.com', password: 'Welcome@123'
        }
        ,
        pensionOtherReturnUser: {
            username: 'rambollua01.eptest.admin2@gisqa.mercer.com', password: 'Welcome12'
        }
        ,
        //Money- New User
        moneyNewUser: {
            username: 'zoetisua10.eptest.admin2@gisqa.mercer.com', password: 'Welcome3'
        }
        ,
        //Money-Return User
        moneyReturnUser: {
            username: 'q2ua16.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money-Dashboard
        MoneyDashboard: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money_Assets
        MoneyAssetUser: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money-Return User
        moneyInsuranceUser: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        }
        ,
        //Money-Awareness
        MoneyAwarenessUser: {
            username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'
        },
        // Money - Income
        MoneyInsights: {username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Savings
        MoneySavings: {username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Debts
        MoneyDebtsUser:{username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'},

        //Money-Outgoings
        MoneyOutgoingUser:{username: 'q2ua17.eptest.admin2@gisqa.mercer.com', password: 'Welcome2'}

    } */

