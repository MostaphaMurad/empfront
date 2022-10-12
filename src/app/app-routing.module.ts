import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {FindEmployeeComponent} from "./find-employee/find-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";


const routes: Routes = [
  { path:'emps',component:EmployeeListComponent},
  {path:'',redirectTo:"emps",pathMatch:'full'},
  {path:'addemp',component:CreateEmployeeComponent},
  {path:'findemp',component:FindEmployeeComponent},
  {path:'updateemp/:id',component:UpdateEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
