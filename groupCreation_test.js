Feature('check if user can create, update and delete groups');

Scenario('test something', (I) => {
    I.login('test11171117+farmatest@gmail.com', 'QWE!@#qwe123');
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[3]');//My livestock icon
    I.waitForText('Breeds', 5);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div/a[2]');//Groups tab
    I.wait(0.5);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]/div/button');//New group button
    I.fillField('#name', 'newGroupName');
    I.fillField('#targetWeight', '123');
    I.click('Create group');
    I.wait(2);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div[2]/div/button');//Edit group button
    I.wait(1);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div[2]/div/button[1]');//Delete group button
    I.waitForText('Delete newGroupName?', 5);
    I.fillField('#confirmation', 'DELETE');
    I.click('Confirm');
    I.waitForText('View and manage your livestock', 3);
});
