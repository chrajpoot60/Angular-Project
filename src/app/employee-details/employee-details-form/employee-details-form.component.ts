import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { NgForm } from '@angular/forms';//for working with NgForm//return form as NgForm when submitted
import { NgModule } from '@angular/core';//this is used to two way binding //used in html part
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styleUrls: ['./employee-details-form.component.css']
})
export class EmployeeDetailsFormComponent implements OnInit {

  constructor(public service:EmployeeServiceService, private toastr:ToastrService) { }

  //use for restrict datepicker
  dateInstance : Date = new Date('2003-01-01');

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(this.service.formData.empId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);  
  }

  insertRecord(form : NgForm){
    this.service.postEmployeeDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success("Submitted successfull", "Employee Details Register")
      },
      err => {console.log(err);}
    )
  }

  updateRecord(form: NgForm) {
    this.service.putEmployeeDetail().subscribe(
      res => {

        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info("Updated successfull", "Employee Details Register")
      },
      err => { console.log(err); }
    );

  }
  //this resetForm method reset the form and create new instance of Employee class whenever insertRecord and updateRecord call
  //so that for each new record initially empId will be 0 (initialise with 0 and in database will be assigned a value because of identity)
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Employee();
  }
}
