import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/First/first.component';
import { SecondComponent } from './Components/second/second.component';
import { RegComponent } from './Components/lab3/reg/reg.component';
import { StudentComponent } from './Components/lab3/student/student.component';
import { StudentsComponent } from './Components/lab3/students/students.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, RegComponent, StudentComponent, StudentsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
