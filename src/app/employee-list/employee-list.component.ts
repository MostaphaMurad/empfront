import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!:any;
  id!:number;
  constructor(private employeeServices:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeServices.getEmployees().subscribe(data=>{
      let data2=JSON.stringify(data);
      this.employees=data;
    });
  }
  updateEmployee(id:any) {
    console.log(id);
    this.router.navigate(['updateemp',id]);
  }
}
