import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() fromChild = new EventEmitter();
  constructor() { }

  ngOnchanges(){
    //this.checkValue( this.showModal );
  }
  ngOnInit() {
    if(this.showModal){

    }
  }

  checkValue(bool: boolean){
    if(bool){
      //$('#studentDetailsModel').modal("show");
    }
  }

  emitValue(bool: boolean){
    
  }

}
