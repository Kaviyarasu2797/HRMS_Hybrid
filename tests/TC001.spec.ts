import { test } from '@playwright/test';
import { general } from '../Lib/General';

test('Login and logout', async ({ page }) => {

    let obj = new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();


});