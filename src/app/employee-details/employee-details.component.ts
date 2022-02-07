import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { EmployeeServiceService } from '../shared/employee-service.service';
import { ToastrService } from 'ngx-toastr';
// import { ViewChild } from '@angular/core';//For ViewChild
import { FormsModule, NgForm } from '@angular/forms';//for NgForm



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public service : EmployeeServiceService, private toastr : ToastrService) { }
  //ViewChild use for data sharing from child to parent
  // @ViewChild('form')
  // form!: NgForm;
 
  ngOnInit(): void { //this method call when this component populate
    //by calling refreshlist() method in ngOnint it will refresh list whenever new record enter
    this.service.refreshlist();
  }

  //this method is used to reflect the list data into our Employee class instance (formData)
  //this method help us to perform update operation
  populateForm(selectedRecord: Employee) {
    //we can't assign list data into instance because it direct reflect to list
    //we need to create a copy of data then assign it into Employee obj
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'+id)) {
      console.log(id);
      this.service.deleteEmployeeDetail(id)
        .subscribe( //suscribe is Observable class method where we udefine message and error
          res => {
            
            this.service.refreshlist();
            this.toastr.error("Deleted successfully", "Employee Details Register");
          },
          err => { console.log(err) }
        )
    }
  }

  //For gender selection 1 for Male And 2 For Female
  isTrue(g : number) : boolean{
    if(g == 1){
      return true;
    }
    else{
      return false;
    }
  }
}
