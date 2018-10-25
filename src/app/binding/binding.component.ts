import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  public name = 'Sabine';
  public siteURL = window.location.href;
  public givenName = 'Sabine';
  public danger = 'text-danger';
  public warning = 'text-warning';
  public isError = true;
  public redColor = 'red';
  public greeting1 = '';
  public greeting2 = '';
  public greeting3 = '';

  public specialClasses = {
    'text-success': this.isError,
    'text-danger': false,
    'text-special': this.isError,
    'text-warning': !true,
  };

  public sampleStyle = {
    color: 'violet',
    // fontWeight: 'bold', why not working?
    fontStyle: 'italic'

  };

  showConsole(value) {
    console.log(value);
  }

  onButton1() {
    console.log('Mouse Clicked');
    this.greeting1 = 'Welcome Sabine, You are learning event binding and you have pressed button 1';
  }

  onButton2(event) {
    console.log(event);
    this.greeting2 = 'Welcome Sabine, you have pressed button 2, log to console for event binding with event as parameter';
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'hello ' + this.name;
  }

  consoleName(value) {
    console.log(value);
  }
}
