import { Component, OnInit } from '@angular/core';
import { EmpRegistartion } from './EmpRegistration';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empreg = new EmpRegistartion();

  employeeName: String;
  employeeId: String;
  employeeContact: String;
  employeeEmail: String;
  employeeDepartment: String;
  employeeHr: String;
  employeeManager: String;

  submitEmployeeDetails() {
    this.employeeName = this.empreg.empName;
    this.employeeId = this.empreg.empId;
    this.employeeContact  = this.empreg.contact;
    this.employeeEmail  = this.empreg.email;
    this.employeeDepartment  = this.empreg.department;
    this.employeeHr  = this.empreg.hr;
    this.employeeManager  = this.empreg.manager;
  }

  clearEmployeeDetails() {
    this.employeeName = "";
    this.employeeId = "";
    this.employeeContact  = "";
    this.employeeEmail  = "";
    this.employeeDepartment  = "";
    this.employeeHr  = "";
    this.employeeManager  = "";
    this.empreg.empName = "";
    this.empreg.empId = "";
    this.empreg.contact = "";
    this.empreg.email = "";
    this.empreg.department = "";
    this.empreg.hr = "";
    this.empreg.manager = "";
  }


}
