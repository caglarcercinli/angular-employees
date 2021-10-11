import { Component, OnInit } from '@angular/core';
import {Employee } from '../employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee : Employee={
    id: 1,
    firstName: 'Caglar',
    lastName:'Cercinli',
    email:'caglar@mail.com',
    password:'caglar'
};

  constructor() { }

  ngOnInit(): void {
  }

}