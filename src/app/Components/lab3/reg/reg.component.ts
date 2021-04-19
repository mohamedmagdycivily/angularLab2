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
  student: { sname: string; sage: number } = {
    sname: this.name,
    sage: this.age,
  };

  @Output() myEvent = new EventEmitter();

  send() {
    // this.student.sname = this.name;  //error undefind
    // this.student.sage = this.age;    //error undefind
    this.myEvent.emit(this.student);

    // console.log(this.name);
    // console.log(this.age);
  }
}
