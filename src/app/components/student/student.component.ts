import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderCol = 'fname';
  sort = false;

  switchOrder(val: string){
    if(val){
      this.orderCol = val;
      this.sort = (this.sort) ? false : true;
    }
  }
  /*public selected student

  viewStudent( object ){
    this.selected_student;
  }*/
}
