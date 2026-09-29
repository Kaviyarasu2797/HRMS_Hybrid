import { global } from "./Global";

export class general extends global {

async openApplication(){
   
     await this.page.goto(this.url);
    console.log('Application opened');
}

async login(){
  
    await this.page.locator(this.txtbox_username).fill(this.username);
    await this.page.locator(this.txtbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log('login successfull');

}

async logout(){
   
    await this.page.locator(this.link_logout).click();
    console.log('Logout copmleted');

}

async addEmployee() {
  
    const frame = this.page.frameLocator(this.empInfo_frame);
    await frame.locator(this.add_Button).click();
    await frame.locator(this.emp_Firstname).fill(this.empFirstName);
    await frame.locator(this.emp_Lastname).fill(this.empLastName);
    await frame.locator(this.emp_saveBtn).click();
    console.log('Employee added');

}

async waitStmt() {

    await this.page.waitForTimeout(3000);
    console.log('3 seconds wait');

}


}