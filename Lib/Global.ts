import { Page } from "@playwright/test";

export class global {

    constructor(public page: Page) {

    }

    //**********Test Data************************ */
    public url: string = "https://sureshitacademy.in/hrms/login.php";
    public username: string = "sureshit";
    public password: string = "sureshit";
    public empFirstName: string ="kavi";
    public empLastName: string ="cse";


    //*********Objects/ loactors********** */
    public txtbox_username: string = "//input[@name='txtUserName']";
    public txtbox_password: string = "//input[@name='txtPassword']"
    public button_login: string = "//input[@name='Submit']";
    public link_logout: string = "//a[text()='Logout']";
    public empInfo_frame : string ="//iframe[@name='rightMenu']";
    public add_Button : string ="//input[@value='Add']";
    public emp_Firstname: string ="//input[@id='txtEmpFirstName']";
    public emp_Lastname : string ="//input[@id='txtEmpLastName']";
    public emp_saveBtn : string ="//input[@id='btnEdit']";


}