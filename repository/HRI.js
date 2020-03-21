module.exports = {
    sections:
        {
        HRI1: {
            selector: 'body',
            elements: {

               username: {locateStrategy: 'xpath', selector: "//input[@id='Username']"},
               password: {locateStrategy: 'xpath', selector: "//input[@id='Password']"},
               login: {locateStrategy: 'xpath', selector: "//button[@class='button evo-button radius']"},
               dashboard: {locateStrategy: 'xpath', selector: "//h1[contains(.,'My Dashboard')]"},
               subheader: {locateStrategy: 'xpath', selector: "(//h2)[1]"},
               next: {locateStrategy: 'xpath', selector: "//button[@class='button btn-next radius evo-button ng-binding']"},
               prac: {locateStrategy: 'xpath', selector: "(//li[@class='ng-scope completed'])[1]"},
               choose_file: {locateStrategy: 'xpath', selector: "//label[@class='button button-ghost round evo-button ng-binding']"},
               upload: {locateStrategy: 'xpath', selector: "//div[@class='button-lead-icon-box']"},
               error: {locateStrategy: 'xpath', selector: "//span[contains(.,'Your file has been uploaded, but it contained errors.')]"},
               success_msg: {locateStrategy: 'xpath', selector: "//span[contains(.,'Upload & Validation Success!')]"},
               error_summary: {locateStrategy: 'xpath', selector: "(//h5[@class='header-toggle off'])[1]"},
               error_details: {locateStrategy: 'xpath', selector: "//div[@class='columns large-10 middle-10 small-10']//h5"},
               error_summary_no: {locateStrategy: 'xpath', selector: "//td[@class='error ng-binding']"},
               trial: {locateStrategy: 'xpath', selector: "//h1[contains(.,'EMPLOYEE DATA')]"},
               remove: {locateStrategy: 'xpath', selector: "//a[@class='button button-action round evo-button text-center ng-binding']"},
               export: {locateStrategy: 'xpath', selector: "//div//a[@class='icon-link']"},
               File_History: {locateStrategy: 'xpath', selector: "(//a[@class='ng-binding'])[5]"}, ///triasllll
                File_history_cancel: {locateStrategy: 'xpath', selector: "//i[@class='evo-icon-site-cross']"}, ///triasllll

               client: {locateStrategy: 'xpath', selector: "(//a[@class='ng-scope'])[1]"},
               pending_client: {locateStrategy: 'xpath', selector: "(//a[contains(.,'Pending Clients')])[2]"},
               medium_shortcut: {locateStrategy: 'xpath', selector: "//i[@class='evo-icon-site-cutoff cutoff-status-medium']"},
               Amit_smoke: {locateStrategy: 'xpath', selector: "//a[contains(.,'Amit_Smoke_')]"},
                Employee_data: {locateStrategy: 'xpath', selector: "(//a[contains(.,'Employee Data')])[1]"},
                count_1: {locateStrategy: 'xpath', selector: "(//span[@class='number ng-binding'])[1]"},
                count_2: {locateStrategy: 'xpath', selector: "(//span[@class='number ng-binding'])[2]"},
                count_3: {locateStrategy: 'xpath', selector: "(//span[@class='number ng-binding'])[3]"},
                count_4: {locateStrategy: 'xpath', selector: "(//span[@class='number ng-binding'])[4]"},

                ////HR ADMIN ////

               HR_username: {locateStrategy: 'xpath', selector: "//input[@id='Username']"},
               HR_password: {locateStrategy: 'xpath', selector: "//input[@id='Password']"},
               HR_login: {locateStrategy: 'xpath', selector: "//button[@class='button evo-button radius']"},
               HR_dashboard: {locateStrategy: 'xpath', selector: "//h1[contains(.,'MY DASHBOARD')]"},
               HR_Employee: {locateStrategy: 'xpath', selector: "(//ul//a[@class='ng-scope'])[1]"},
               HR_Upload_a_file: {locateStrategy: 'xpath', selector: "(//li[@class='ng-scope'])[2]"},
               HR_continue: {locateStrategy: 'xpath', selector: "//a[contains(.,'Continue')]"},
               HR_Trial: {locateStrategy: 'xpath', selector: "//h1[contains(.,'Upload A File')]"},
               HR_Upload: {locateStrategy: 'xpath', selector: "//div[@class='button-lead-icon-box']"},
               HR_errormsg: {locateStrategy: 'xpath', selector: "//span[contains(.,'Your file has been uploaded, but it contained errors.')]"},
               HR_successmsg: {locateStrategy: 'xpath', selector: "//span[contains(.,'Upload & Validation Success!')]"},
               HR_Uploaded: {locateStrategy: 'xpath', selector: "//span[contains(.,'Uploaded')]"},
               HR_Error: {locateStrategy: 'xpath', selector: "//span[contains(.,'Errors')]"},
               HR_Error_1: {locateStrategy: 'xpath', selector: "(//i[@class='evo-icon-site-pen'])[1]"},
               HR_Error1: {locateStrategy: 'xpath', selector: "(//input[@type='text'])[1]"},
               HR_Error2: {locateStrategy: 'xpath', selector: "(//input[@type='text'])[2]"},
               HR_Error3: {locateStrategy: 'xpath', selector: "(//input[@type='text'])[3]"},
               HR_Error4: {locateStrategy: 'xpath', selector: "(//input[@type='text'])[4]"},
               save: {locateStrategy: 'xpath', selector: "//a[contains(.,'Save')]"},
               new_eff_date: {locateStrategy: 'xpath', selector: "//a[contains(.,'30')]"},
               export_error_file: {locateStrategy: 'xpath', selector: "(//a[@class='button evo-button button-action round text-center ng-binding'])[1]"},
               upload_remidiated_file: {locateStrategy: 'xpath', selector: "//label[@class='button evo-button button-action round text-center ng-binding']"},
               skip_errors: {locateStrategy: 'xpath', selector: "(//a[@class='button evo-button button-action round text-center ng-binding'])[2]"},
               skipped_msg: {locateStrategy: 'xpath', selector: "//div[@class='alert-box radius evo-alert-box warning ng-binding ng-scope']"},
               confirmation: {locateStrategy: 'xpath', selector: " //a[@class='button evo-button small radius ng-binding']"},
               skip_first_error: {locateStrategy: 'xpath', selector: "(//div[@class='action action-warning']//i[@class='evo-icon-site-undo'])[1]"},
               skip_first_error_msg: {locateStrategy: 'xpath', selector: "}//span[contains(.,'null Lann record was skipped.')]"},
               skipped_tab: {locateStrategy: 'xpath', selector: "//div//dl//dd//span[contains(.,'Skipped')]"},
               undo_tab: {locateStrategy: 'xpath', selector: "//i[@class='evo-icon-site-undo']"},
               undo_tab_msg: {locateStrategy: 'xpath', selector: "//i[@class='evo-icon-site-undo']"},
        }
    }
}}
