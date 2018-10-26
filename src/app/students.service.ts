import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents() {
    return [
      {'id': 4, 'name': 'Amudhan', 'rollNo': 'EC11004', 'Dept': 'ECE'},
      {'id': 22, 'name': 'Rajesh', 'rollNo': 'EC11022', 'Dept': 'EEE'},
      {'id': 23, 'name': 'Terror', 'rollNo': 'CS11023', 'Dept': 'CSE'}
    ];
  }
}
