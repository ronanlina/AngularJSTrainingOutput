import { Injectable } from '@angular/core';

@Injectable()
export class StudentwService {

  public studentList = [
    { id:'', fname: 'Akron', mname: 'Ohio', lname: 'US'},
    { id:'', fname: 'Zimbabwe', mname: 'MO1', lname: 'AD'},
    { id:'', fname: 'Lebron', mname: 'Raymone', lname: 'James'}
  ];
  constructor() {
   }
  getStudentList(){
    return this.studentList;
  }
  addStudentList( object ){
    this.studentList.push(object);
  }
}
