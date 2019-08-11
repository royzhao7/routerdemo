import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute , private router: Router) { }
public id;
  ngOnInit() {
    // tslint:disable-next-line: radix
    // this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // tslint:disable-next-line: radix
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {  this.id = parseInt(params.get('id')); } );
  }


  gotoPre() {
    let pid = this.id - 1;
    this.router.navigate(['/departments', pid]);
  }

  gotoNext() {
    let nid = this.id + 1;
    this.router.navigate(['/departments', nid]);
  }
}
