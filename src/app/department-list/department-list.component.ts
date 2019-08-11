import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
departments = [{ id : 1, name : 'aa'}, { id : 2, name : 'aa'}];
  constructor() { }

  ngOnInit() {
  }

}
