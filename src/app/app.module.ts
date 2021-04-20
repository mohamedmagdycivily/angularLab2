import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/First/first.component';
import { SecondComponent } from './Components/second/second.component';
import { RegComponent } from './Components/lab3/reg/reg.component';
import { StudentsComponent } from './Components/lab3/students/students.component';
import { StudentsemployeesComponent } from './Components/day4/studentsemployees/studentsemployees.component';
import { EmployeesDetailsComponent } from './Components/day4/employees-details/employees-details.component';
import { AboutComponent } from './Components/day4/about/about.component';
import { ErrorComponent } from './Components/day4/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    RegComponent,
    StudentsComponent,
    StudentsemployeesComponent,
    EmployeesDetailsComponent,
    AboutComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
