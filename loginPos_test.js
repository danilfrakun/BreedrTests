Feature('positiveLoginTest');

Scenario('check if user can login', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'test11171117+farm@gmail.com');
    I.fillField('password', 'Alex2312');
    I.click('Login');
    I.waitForText('Trades', 10);
});
