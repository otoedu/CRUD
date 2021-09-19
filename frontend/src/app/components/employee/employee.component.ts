import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../Services/employee.service'
import { NgForm } from "@angular/forms";
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(public  employeeServices: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getEmployees(){
    this.employeeServices.getEmployees().subscribe(
      res => {
        this.employeeServices.employees = res;
      },
      err => console.error(err)
      )
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeServices.putEmployee(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else {
      this.employeeServices.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

  delete(_id:any){
   if (confirm('Are you sure want to delete it?')){
       this.employeeServices.deleteEmployee(_id).subscribe(resp=>{
         console.log(resp),

             this.getEmployees()

       })
   }

  }

  edit(employee: Employee){
    this.employeeServices.selectedEmployee = employee;

  }
}
