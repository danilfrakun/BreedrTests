
Feature('check rfl template creation');

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
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/div/button'); //New RFL button
    I.fillField('#livestockCount', 321);
    I.click('Save as template');
    I.see('Save RFL template');
    I.fillField('#templateName', 'qwe123');
    I.click('Save');
    I.wait(1);
    I.click('#select-templates');
    I.see('qwe123');
    I.wait(1);
    I.click('//*[@id="menu-templates"]/div[2]/ul/li[1]');//No template
    I.wait(1);
    I.click('#select-templates');
    I.wait(1);
    I.click('//*[@id="menu-templates"]/div[2]/ul/li[2]');
    I.wait(1);
    I.see('321');
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div/div/span/div/button');//Manage templates icon
    I.waitForText('Manage RFL templates', 5);
    I.click('/html/body/div[4]/div/div[2]/div/ul/li/div[1]/button');//Trashcan icon
    I.waitForText('delete', 5);
    I.click('delete');
    I.click('/html/body/div[4]/div/button');//The 'x' button
    I.waitForText('New request for Livestock', 5);
});
