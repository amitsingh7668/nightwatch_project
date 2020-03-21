var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
require('nightwatch-cucumber')({
    supportFiles: ['./utils/TestExecListener.js'],
    stepTimeout:2000000,
    defaultTimeoutInterval:2000000
})

module.exports = {
    output_folder: 'reports',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path : "repository",
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 5555,
        cli_args: {
            'webdriver.chrome.driver': "C:\\chromedriver.exe",
            'webdriver.ie.driver': 'C:\\Program Files\\Internet Explorer\\IEDriverServer.exe',
            'webdriver.firefox.profile':"C:\Program Files (x86)\Mozilla Firefox\\firefox.exe",
        }
    },

    test_settings: {
        default : {
            launch_url: "http://localhost",
            page_objects_path : "repository",
            selenium_host: "127.0.0.1",
            selenium_port: 5555,
            silent : true,
            disable_colors: false,
            // screenshots: {
            //     enabled: true,
            //     on_failure: true,
            //     on_error: true,
            //     path: 'screenshots'
            // },

            desiredCapabilities: {
                //browserName: "internet explorer",
                browserName: "chrome",
                javascriptEnabled : true,
                acceptSslCerts : true
            }
        }


    }
}



