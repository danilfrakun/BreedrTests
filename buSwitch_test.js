
Feature('Check if user can switch between BU');

Scenario('test something', (I) => {
    I.login('test11171117+farm@gmail.com', 'qweqwe123123');
    I.click('#select-businessUnitSwitcher');
    I.wait(0.5);
    I.click('//*[@id="menu-businessUnitSwitcher"]/div[2]/ul/li[10]');
    I.waitForText('Some animals not synced to BCMS', 5);
});
