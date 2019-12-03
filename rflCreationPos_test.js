
Feature('creation of L2D RFL');

Scenario('check if user can create L2D RFL', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'test11171117+farm@gmail.com');
    I.fillField('password', 'Alex2312');
    I.click('Login');
    I.waitForText('Trades', 10);
    I.click('//*[@id="profileButton"]'); //Settings icon
    I.waitForText('Log Out', 10);
    I.click('/html/body/div[4]/div/div[2]/div[1]/div/div/div'); //dropdown Icon
    I.waitForText('Buyer', 10);
    I.click('/html/body/div[4]/div/div[2]/div[1]/div/a[2]'); //Buyer option
    I.waitForText('All RFL', 10);
    I.click('//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div'); //create RFL button
    I.waitForText('New request for Livestock', 10);
    I.fillField('#livestockCount', '1'); //Livestock field
    I.click('//*[@id="deliveryDate"]'); //Calendar field
    I.click('//*[@id="root"]/div/div[2]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/span/div[2]/div/div[2]/div[2]/div[5]/div[7]'); //I hope this is the bottom-right date ><
    I.click('//*[@id="select-deliveryAddress"]'); //delivery address
    I.click('//*[@id="menu-deliveryAddress"]/div[2]/ul/li'); //address option
    I.fillField('//*[@id="targetWeight"]', '123'); //target weight
    I.fillField('//*[@id="price"]', '321'); //price field
    I.click('//*[@id="root"]/div/div[2]/div/div[3]/div[2]/div[1]/div[4]/div/div/div'); //Sharing
    I.wait(10);//??????????????????????????????????????????????????????????????????
    I.fillField('//*[@id="root"]/div/div[2]/div/div[3]/div[2]/div[1]/div[4]/div/div/div/div/div[1]', 'FUNN');
    I.click('FUNNY');
});
