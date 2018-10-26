import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directive',
  templateUrl: './struct-directive.component.html',
  styleUrls: ['./struct-directive.component.scss']
})
export class StructDirectiveComponent implements OnInit {

 public isError = false;
 public isValue = true;
 public color = '';
 public colors = ['Red', 'Blue', 'Green', 'Violet'];

  constructor() { }

  ngOnInit() {
  }

}
