import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from '../Models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  URL_API = 'http://localhost:4000/api/employees'

  selectedEmployee: Employee ={
    name: "",
    user: '',
    mail: '',
    cell: 0,

  };
  employees!: Employee [];

  constructor(private http: HttpClient){}

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);

  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee(_id: Employee ){


    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  putEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteOpcion (opcion: Employee | string): Observable<Employee> {
    const id = typeof opcion === 'string' ? opcion : opcion._id;
    const url = `${this.URL_API}/${id}`;

    return this.http.delete<Employee>(url);
  }

  editEmployeegetEmployees() {
    return this.http.get<Employee[]>(this.URL_API);

  }
}

