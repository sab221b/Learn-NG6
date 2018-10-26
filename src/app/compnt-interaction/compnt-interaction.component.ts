import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compnt-interaction',
  templateUrl: './compnt-interaction.component.html',
  styleUrls: ['./compnt-interaction.component.scss']
})
export class CompntInteractionComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hello Rajesh, this is from child to parent');
  }

}
