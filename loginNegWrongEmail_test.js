
Feature('LoginNegWrongEmail');

Scenario('check that user gets error message in case of wrong email', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'email');
    I.fillField('password', 'qweqwe');
    I.click('Login');
    I.see('E-mail is not valid!');
});
