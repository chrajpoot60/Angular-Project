import { Byte } from "@angular/compiler/src/util";

export class Employee{
    //need to be in camel case
    empId:number = 0;
    empName: string = '';
    dateOfBirth: string='';
    gender: number = 0;
    emailId: string = '';
    address: string = '';
    pincode: string = '';
    isActive: Byte = 1; 
}