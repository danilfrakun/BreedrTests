
Feature('Check if user can CRUD fields');

Scenario('test something', (I) => {
    I.login('test11171117+farmatest@gmail.com','QWE!@#qwe123');
    I.click('//*[@id="root"]/div/div[1]/div/nav[1]/a[3]');//All livestock icon
    I.waitForText('Breed', 5);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div/a[3]/span');//Fields tab
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/div/button');//New field button
    I.fillField('#name', 'newFieldName');
    I.fillField('#size', '123');
    I.loremIpsum('#description');
    I.click('#select-location');
    I.click('//*[@id="menu-location"]/div[2]/ul/li');//A location from the dropdown
    I.wait(0.5);
    I.click('#select-pastureTypes');
    I.click('//*[@id="menu-pastureTypes"]/div[2]/ul/li[1]');//2 types of a field
    I.click('//*[@id="menu-pastureTypes"]/div[2]/ul/li[2]');
    I.click('.jss478.jss479');//Click somewhere on the screen to dissmiss a popup
    I.wait(0.5); 
    I.click('#isOrganic');
    I.click('#isYard');
    I.click('Create field');
    I.waitForText('No animals in the field', 5);
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div[2]/div/button');//Edit button
    I.waitForText('Delete field');
    I.click('.TextButton_text_button__2dSS0.TextButton_text_button--primary__2v4Iy.TextButton_text_button--warning__22GKe');//Delete field button
    I.waitForText('Delete newFieldName?', 5);
    I.fillField('#confirmation', 'DELETE');
    I.click('/html/body/div[4]/div[2]/div[2]/div[2]/button');//Confirm
    I.waitForText('My livestock', 5);
    I.wait(4);
});
