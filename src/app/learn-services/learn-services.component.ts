import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-learn-services',
  templateUrl: './learn-services.component.html',
  styleUrls: ['./learn-services.component.scss']
})
export class LearnServicesComponent implements OnInit {
  public students = [];

  constructor(private _studentService: StudentsService) { }

  ngOnInit() {
    this.students = this._studentService.getStudents();
  }

}
