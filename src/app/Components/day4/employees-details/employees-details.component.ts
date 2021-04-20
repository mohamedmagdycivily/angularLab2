import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styles: [],
})
export class EmployeesDetailsComponent implements OnInit {
  id;
  constructor(myActivated: ActivatedRoute) {
    // console.log(myActivated.snapshot.params.id);
    this.id = myActivated.snapshot.params.id;
  }

  ngOnInit(): void {}
}
