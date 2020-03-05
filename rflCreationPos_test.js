
Feature('creation of L2D RFL');

const date = new Date()

Scenario('check if user can create L2D RFL', (I) => {
    I.amOnPage('https://app2-staging.breedr.co/signin');
    I.see('Login');
    I.click('Login');
    I.fillField('email', 'test11171117+farm@gmail.com');
    I.fillField('password', 'qweqwe123123');
    I.click('Login');
    I.waitForText('Dashboard', 10);
    I.wait(1);
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[2]/span'); //Trading icon
    I.wait(1);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/button'); //New RFL button
    I.fillField('//*[@id="livestockCount"]', 1); //fill Livestock count field
    I.click('//*[@id="deliveryDate"]');
    I.click('.react-datepicker__navigation.react-datepicker__navigation--next'); //Arrow to the next mounth
    I.click('.react-datepicker__day.react-datepicker__day--015');//Central date
    I.click('#select-deliveryAddress');//Delivery address
    I.click('//*[@id="menu-deliveryAddress"]/div[2]/ul/li[1]')//The delivery address
    I.scrollTo('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/div[1]/div[2]/p');
    I.fillField('#maxWeight', 123);
    I.fillField('#maxAge', 123);
    I.wait(5);
});
