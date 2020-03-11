
Feature('Check if user can create l2l rfl');

Scenario('test something', (I) => {
    I.login('test11171117+farm@gmail.com', 'qweqwe123123');
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[2]/span'); //Trading icon
    I.wait(1);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/div/button'); //New RFL button
    I.fillField('//*[@id="livestockCount"]', 1); //fill Livestock count field
    I.click('#select-purchaseType');
    I.click('//*[@id="menu-purchaseType"]/div[2]/ul/li[2]');//L2L option
    I.click('//*[@id="deliveryDate"]');
    I.click('.react-datepicker__navigation.react-datepicker__navigation--next'); //Arrow to the next mounth
    I.click('.react-datepicker__day.react-datepicker__day--015');//Central date
    I.click('#select-deliveryAddress');//Delivery address
    I.click('//*[@id="menu-deliveryAddress"]/div[2]/ul/li[1]')//The delivery address
    I.scrollTo('#select-breeds');
    I.fillField('#maxWeight', 123);
    I.fillField('#maxAge', 123);
    I.fillField('#price', 123);
    I.click('Share with my preferred suppliers');
    I.scrollPageToTop();
    I.click('Create now');
    I.wait(2);
    I.see('RFL was successfully saved');
});
