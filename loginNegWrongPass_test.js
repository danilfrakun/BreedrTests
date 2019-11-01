
Feature('LoginNegWrongPass');

Scenario('check that user gets error message in case of wrong pass', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'lyubov.bobrovitskaya@litslink.com');
    I.fillField('password', 'qweqwe');
    I.click('Login');
    I.waitForText('Incorrect credentials', 10);
});
