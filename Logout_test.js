
Feature('logout');

Scenario('check if user can logout', (I) => {
    I.login('test11171117+admin2@gmail.com', 'qweqwe123123')
    I.click('.DashboardUser_dashboard_user__2yMlx'); //User icon
    I.click('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div/div/div'); //Log Out option
    I.waitForText('Login', 10);
});
