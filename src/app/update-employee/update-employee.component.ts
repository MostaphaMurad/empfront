import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  employee:Employee=new Employee();
  constructor(private employeeServices:EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeServices.findEmployee(this.id).subscribe(data=>{
      this.employee=data;
    });
  }
  private goToPage(){
    this.router.navigate(['/emps']);
  }
  onSubmit() {
    this.employeeServices.updateEmployee(this.employee,this.id).subscribe(data=>{
      this.employee=data;
      this.goToPage();
    });
  }
}
