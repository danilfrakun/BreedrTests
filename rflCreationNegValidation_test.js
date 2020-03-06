
Feature('error messages on RFL creation page part 2');

Scenario('test something', (I) => {
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
    I.scrollTo('#minWeight');
    I.fillField('#minWeight', '150');
    I.fillField('#maxWeight', '100');
    I.fillField('#minAge', '10');
    I.fillField('#maxAge', '5');
    I.fillField('#price', '45.12');
    I.click('Create now');
    I.see('Max weight should be more than min');
    I.see('Max age should be more than min');
    I.see('Price should be rounded');
});
