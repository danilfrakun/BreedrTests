
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
  }

  });
}
