
Feature('error messages on RFL creation page');

Scenario('test something', (I) => {
    I.login('test11171117+farm@gmail.com', 'qweqwe123123');
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[2]/span'); //Trading icon
    I.wait(1);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/div/button'); //New RFL button
    I.click('Create now');
    I.see('Livestock count is required!');//Here and further error messages check
    I.see('Delivery date is required!');
    I.see('Delivery address is required!');
    I.scrollTo('//*[@id="select-shippingTerms"]/span');
    I.see('Max weight is required!');
    I.see('Max age is required!');
    I.see('Price is required!');
    I.see('Supplier is required!');
});
