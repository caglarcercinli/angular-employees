import { Component, OnInit } from '@angular/core';
import {Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = EMPLOYEES;
//   employee : Employee={
//     id: 1,
//     firstName: 'Caglar',
//     lastName:'Cercinli',
//     email:'caglar@mail.com',
//     password:'caglar'
// };
  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
