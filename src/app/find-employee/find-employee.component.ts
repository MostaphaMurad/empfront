import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-employee',
  templateUrl: './find-employee.component.html',
  styleUrls: ['./find-employee.component.css']
})
export class FindEmployeeComponent implements OnInit {
  id!:number;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.findEmployee();
  }
  private findEmployee(){
    return this.employeeService.findEmployee(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    })
  }
  private goToPage(){
    this.router.navigate(['/emps']);
  }
  onSubmit() {
    this.findEmployee();
  }

  public deleteEmployee(id:any) {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(data=>{
      console.log(data);
      this.goToPage();
    });
  }
}
