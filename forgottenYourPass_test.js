
Feature('check if "forgottem your pass" feature is working');

Scenario('test something', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.click('Login');
    I.click('Forgotten your password?');
    I.wait(1);
    I.fillField('//*[@id="root"]/div/div/div/div[2]/div/div/div/input', 'test11171117+farmatest@gmail.com');
    I.click('Reset password');
    I.waitForText('You should soon receive an email allowing you to reset your password.', 5);
    I.wait(3);
});
