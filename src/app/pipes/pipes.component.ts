import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public name = 'Sabine';
  public message = 'You are learning Pipes';
  public date = new Date();
  public myName = {
    'firstname': 'Rajesh',
    'lastname': 'Ravichandran',
  };
  

  constructor() { }

  ngOnInit() {
  }

}
