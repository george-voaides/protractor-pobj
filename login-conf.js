
exports.config = {
  
  //Add baseUrl here or pass it at execution wiht --baseUrl="http://yoururl.com"
  // baseUrl: 'test',
  
  directConnect: true,
  
  specs: ['tests/*.js'],
  framework: 'jasmine2',
  
  onPrepare: function(){
    browser.manage().window().setSize(1024, 800);
    
    browser.driver.get(browser.baseUrl);
    
    browser.getCapabilities().then(function (browserCapabilities) {
      console.log("Browser name is: " + browserCapabilities.get('browserName'));
      console.log("Browser version is: " + browserCapabilities.get('version'));
      console.log("Browser version is: " + browserCapabilities.get('platform'));
    });
    
    // better jasmine 2 reports...
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));
    
    
  },

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 2,
    chromeOptions: {
      args: [
        // disable chrome's wakiness
        '--disable-infobars',
        '--disable-extensions',
        'verbose',
        'log-path=/tmp/chromedriver.log'
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        'credentials_enable_service': false,
        'password_manager_enabled': false
      }
    }
  },
  
  jasmineNodeOpts: {
    showColors: true,
    displayStacktrace: true,
    displaySpecDuration: true,
    // overrides jasmine's print method to report dot syntax for custom reports
    print: function () {},
    defaultTimeoutInterval: 50000
  },
  
};