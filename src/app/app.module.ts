import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//following module need to import
import { HttpClientModule } from '@angular/common/http'; //require for http request
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsFormComponent } from './employee-details/employee-details-form/employee-details-form.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 2000,enableHtml:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
