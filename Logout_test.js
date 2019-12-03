
Feature('logout');

Scenario('check if user can logout', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'test11171117+farm@gmail.com');
    I.fillField('password', 'Alex2312');
    I.click('Login');
    I.waitForText('Trades', 10);
    I.click('//*[@id="profileButton"]'); //Settings icon
    I.waitForText('Log Out', 10)
    I.click('/html/body/div[4]/div/div[2]/div[2]'); //Log Out option
    I.waitForText('Login', 10);
});
