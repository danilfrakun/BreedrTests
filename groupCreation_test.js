Feature('check if user can create, update and delete groups');

Scenario('test something', (I) => {
    I.login('test11171117+farmatest@gmail.com', 'QWE!@#qwe123');
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[3]');//My livestock icon
    I.waitForText('Breeds', 5);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div/a[2]');//Groups tab
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div/button');//New group button
    I.wait(5);
});
