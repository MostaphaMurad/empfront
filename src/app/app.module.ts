import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeService} from "./employee.service";
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FindEmployeeComponent } from './find-employee/find-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    FindEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
