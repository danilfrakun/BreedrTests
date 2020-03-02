
Feature('logout');

Scenario('check if user can logout', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'test11171117+farm@gmail.com');
    I.fillField('password', 'qweqwe123123');
    I.click('Login');
    I.waitForText('Dashboard', 10);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div/button'); //User icon
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div/div/a'); //Log Out option
    I.waitForText('Login', 10);
});
