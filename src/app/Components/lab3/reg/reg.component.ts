import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
})
export class RegComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = '';
  age: number = null;
  student: { name: string; age: number };

  @Output() myEvent = new EventEmitter();

  send() {
    // this.student.sname = this.name;  //error undefind
    // this.student.sage = this.age;    //error undefind
    // let student = {
    //   name: this.name,
    //   age: this.age,
    // };
    this.student = {
      name: this.name,
      age: this.age,
    };
    this.myEvent.emit(this.student);
    this.name = '';
    this.age = null;

    // console.log(this.name);
    // console.log(this.age);
  }
}
