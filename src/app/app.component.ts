import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularLab2';
  students: { name: string; age: number }[] = [];
  // students = [];
  reciveData(data) {
    this.students.push(data);
    console.log(this.students);
  }
}
