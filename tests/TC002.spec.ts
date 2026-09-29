import {test} from "@playwright/test";
import { general } from "../Lib/General";

test('add employee' , async ({page}) => {
    
  let obj =new general(page);
  await obj.openApplication();
  await obj.waitStmt();
  await obj.login();
  await obj.waitStmt();
  await obj.addEmployee();
  await obj.waitStmt();
  await obj.logout();

})