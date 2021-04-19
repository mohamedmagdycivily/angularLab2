import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularLab2';
  // students: {}[];

  reciveData(data) {
    console.log(data);
    // this.DataMnLoginInParent = data;
  }
}
