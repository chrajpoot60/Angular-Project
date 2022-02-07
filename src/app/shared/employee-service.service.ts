import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  //best way to inject dependency using constructor because whenever a object created it will be injected with dependency
  //injecting HttpClient class dependency
  constructor(private http : HttpClient) { }

  //creating a formData refrence which contain Employee obj
  //this refrence variable is used to data assignment from form directly using two way binding
  formData : Employee = new Employee();
  // stringGender : string ='';
  //list full showing details
  list: Employee[] = [];
  //property of EmployeeServiceService class
  readonly baseURL = "http://localhost:58573/api/EmployeesAPI";
  //creating crrud method which will communicate with html
  postEmployeeDetails() {
    // if(this.stringGender === "Male"){
    //   this.formData.gender = 1;
    // }
    // else {
    //   this.formData.gender = 2;
    // }
    return this.http.post(this.baseURL, this.formData)
  }
  putEmployeeDetail(){
    // if(this.stringGender === "Male"){
    //   this.formData.gender = 1;
    // }
    // else {
    //   this.formData.gender = 2;
    // }
    return this.http.put(this.baseURL+'/'+this.formData.empId,this.formData)
    //return this.http.put('${{this.baseURL}}/${{this.formData.paymentDetailId}}',this.formData)
  }
  deleteEmployeeDetail(id:number){
    return this.http.delete(this.baseURL+'/'+id);
    //return this.http.delete('${this.baseURL}/${id}');
  }
  //get method which return Observable response so to get response we use toPromise which return the list of Employee[] as response
  refreshlist() {
    this.http.get(this.baseURL).toPromise()
      .then(res => this.list = res as Employee[]);

      // for(let item of this.list){
      //   if(item.gender == 1){
      //     this.stringGender = "Male";
      //   }
      //   else {
      //     this.stringGender = "Female";
      //   }
      // }
  }
}
