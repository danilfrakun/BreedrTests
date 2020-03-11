
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login: function (email, password){
      this.amOnPage('https://app2-staging.breedr.co/signin');
      this.see('Login');
      this.click('Login');
      this.fillField('email', email);
      this.fillField('password', password);
      this.click('Login');
      this.waitForText('Dashboard', 10);
      this.wait(1);
  },
    loremIpsum: function (selector){
      this.fillField(selector, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  }

  });
}
