import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departments = [
    { id: 1, name: 'aa' },
    { id: 2, name: 'aa' },
    { id: 3, name: 'aa' },
    { id: 4, name: 'aa' }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        // tslint:disable-next-line: radix
        let id = parseInt(params.get('id'));
        this.selectedId = id;
    });
  }
  onSelect(department) {
   // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo : this.route });
  }

  isSelected(department) {
    return department.id === this.selectedId ;
  }
}
