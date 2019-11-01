
Feature('loginNegEmptyFields');

Scenario('check if user gets error messages', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.click('Login');
    I.see('E-mail is required!');
    I.see('Password is required!');
});
