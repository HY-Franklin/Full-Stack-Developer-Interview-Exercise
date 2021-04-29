import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Employee} from "../model/Employee";


@Injectable({
  providedIn: 'root'
})

// EmployeesService is responsible for CRUD operation with back end server
export class EmployeesService {

  private url:string="http://localhost:8080/all"
  private updateUrl:string="http://localhost:8080/post"
  private deleteUrl:string="http://localhost:8080/delete/"

  constructor(private http:HttpClient) { }

  // get all Employees from database
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  // update specific employee
  updateEmployee(employee){
    this.http.post(this.updateUrl,employee).subscribe(res=>console.log(res),error => console.log(error));
  }

  // delete specific employee
  deleteEmployee(employee){
    this.http.delete<Employee>(`${this.deleteUrl}${employee.id}`)
      .subscribe(res=>console.log(res),error => console.log(error));
    location.reload();
  }


}
