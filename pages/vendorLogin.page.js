var page = require('./page')

var loginPage = Object.create(page, {
 
  /**
   * define elements
   */
 
  username: { get: function () { return browser.element(by.name('email')); } },
  password: { get: function () { return browser.element(by.name('password')); } },
  loginButton:     { get: function () { return browser.element(by.css('body > div.view.ng-scope > div > div.panel-body > form > div.formButtons > div > button')); } },
  errorMessage:    { get: function () { return element(by.css('body > div.view.ng-scope > div > div.panel-body > form > span')); } },
  
  
  /**
   * define or overwrite page methods
   */
  open: { value: function() {
    page.open.call(this, 'login');
  } },
  
  loginAs:{ value: function(user, pass){
    this.username.sendKeys(user);
    this.password.sendKeys(pass);
    this.loginButton.click();
  }},

});

module.exports = loginPage
