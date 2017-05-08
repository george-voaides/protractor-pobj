function Page () {
}

Page.prototype.open = function (path) {
  browser.driver.get('/');
}

module.exports = new Page()


