import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-learn-services',
  templateUrl: './learn-services.component.html',
  styleUrls: ['./learn-services.component.scss']
})
export class LearnServicesComponent implements OnInit {
  public students = [];
  public employees = [];

  constructor(private _studentService: StudentsService, private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.students = this._studentService.getStudents();
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
