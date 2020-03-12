
Feature('check if user gets the errors on forgotten your pass page');

Scenario('test something', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.click('Login');
    I.click('Forgotten your password?');
    I.click('Reset password');
    I.see('E-mail is required!');
    I.fillField('//*[@id="root"]/div/div/div/div[2]/div/div/div', 'qwe');//Email field
    I.click('Reset password');
    I.see('E-mail is not valid!');
    I.fillField('//*[@id="root"]/div/div/div/div[2]/div/div/div', 'qwe@asd.zxc');
    I.click('Reset password');
    I.see('User with this email does not exist.');
    I.wait(3);
});
