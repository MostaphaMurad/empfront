import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl='http://localhost:8080/emp/v1/api';
  constructor(private http:HttpClient) { }
  public getEmployees():Observable<any>{
    const header = {
      headers: new HttpHeaders()
        .set('content-type', 'application/json')
    }
    return this.http.get<Employee[]>(`${this.baseUrl}/emps`,header);
  }
  public saveEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.baseUrl}/save`,employee);
  }
  public findEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/findemp/${id}`);
  }
  public deleteEmployee(id: number | undefined):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`)
  }
  public updateEmployee(employee:Employee,id:number):Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/update/${id}`,employee);
  }
}
