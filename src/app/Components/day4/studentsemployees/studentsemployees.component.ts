import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentsemployees',
  templateUrl: './studentsemployees.component.html',
  styles: [],
})
export class StudentsemployeesComponent implements OnInit {
  constructor() {}

  name: string;
  age: number;
  ngOnInit(): void {}
  Add() {
    if (!this.name || !this.age || this.age < 18 || this.age > 60) {
      return;
    }
    this.name = '';
    this.age = null;
    console.log('added');
  }
}
