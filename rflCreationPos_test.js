
Feature('creation of L2D RFL');

Scenario('check if user can create L2D RFL', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'test11171117+farm@gmail.com');
    I.fillField('password', 'qweqwe123123');
    I.click('Login');
    I.waitForText('Dashboard', 10);
    I.wait(1);
    I.click('//*[@id="select-businessUnitSwitcher"]/span'); //User dropdown icon
    I.click('//*[@id="menu-businessUnitSwitcher"]/div[2]/ul/li[7]'); //Switch to Buyer BU
    I.waitForElement('//*[@id="root"]/div/div[1]/div/nav[1]/a[2]', 5);
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[2]');
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/button'); //New RFL icon
    I.wait(5);
});
