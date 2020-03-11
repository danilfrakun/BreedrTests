
Feature('check if user gets the error messages on pass change page');

Scenario('test something', (I) => {
    I.login('test11171117+farmatest@gmail.com', 'QWE!@#qwe123');
    I.click('//*[@id="root"]/div/div[1]/div/nav[2]/a');//Settings icon
    I.waitForText('User Settings', 5);
    I.click('Security settings');
    I.fillField('#prePassword', 'QWE!@#qwe123');
    I.fillField('#password','qwe');
    I.fillField('#confirmPassword', 'qwe');
    I.click('//*[@id="root"]/div/div[2]/div[1]/div[2]/div[6]/div/button');//Change pass button
    I.waitForText('This password is too short.', 5);
    I.fillField('#password','qwe');
    I.fillField('#confirmPassword', 'qwe');
    I.waitForText('This password is entirely numeric.');
    I.wait(4);

});
