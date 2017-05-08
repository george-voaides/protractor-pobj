var LoginPage = require('../pages/vendorLogin.page.js');

describe('auth form', function () {
  
  it('should deny access with incorrect creds', function () {
    LoginPage.loginAs("test","test");
    expect(LoginPage.errorMessage.getText()).toContain('Invalid email or password.');
  });
  
});