import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Router,Route} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private employeeServices:EmployeeService,private router:Router) { }
  ngOnInit(): void {
  }
  private addEmployee(){
    return this.employeeServices.saveEmployee(this.employee).subscribe(data=>{
      this.goToPage();
    });

  }
  private goToPage(){
    return this.router.navigate(['/emps']);
  }
  onSubmit() {
    console.log(this.employee);
    this.addEmployee();
  }
}
