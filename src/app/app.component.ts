import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import {StudentwService} from './services/student/studentw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  public myId: string = "myAngularId";
  public myValue: string = "inputVal";
  //public isSuccess: boolean = true;
  public colorGreen: string = "orange";
  public alert: string = "";
  public show: boolean = true;
  public check: string = "gotcha";
  //public students: any = [];

  public inputValue: string= "uniqueId";
  public isSuccess: boolean = false;
  //public studentList: any = [];

  public dateObject = new Observable<string>((subs: Subscriber<string>)=>{
      setInterval(()=>{subs.next(new Date().toString() );}, 1000);
  });

  public keyword: String;
  public orderCol = 'fname';

  public studentList = [];

  constructor(public studentService: StudentwService){

  }

  ngOnInit(){
    this.studentList = this.studentService.getStudentList();
  }
  public login = {
      success: this.isSuccess,
      error: false
  };

  public student = {
    id : '',
    fname : '',
    mname : '',
    lname : ''
  };
  
  public notification = {
    class : '',
    message : ''
  };

  continueAdd(){
    return (this.student.fname.length > 0 && this.student.mname.length > 0 && this.student.lname.length > 0);
  }

  addStudent(){
    let newData: any;
    newData = Object.assign({}, this.student);

    this.studentList.push( newData );
    this.studentService.addStudentList( newData );

    for(let stud in this.student){
      this.student[stud] = '';
    }
  }

  public edit: boolean = false;
  getStudent(data){
    this.student = data;

    this.edit = true;
  }

  valueChanged(update){
    console.log(update);
  }

  clear(){

    let copy = Object.assign({}, this.student);

    for(let copyData in copy){
      copy[copyData] = '';
    }
    this.student = copy;
  }

  newStudent(){
    this.edit = false;
  }

  isValid(input){
    if(input.length > 0){
      this.notification.class = 'text-success';
      this.notification.message = 'valid first name';
    }
    else{
      this.notification.class = 'text-danger';
      this.notification.class = 'invalid first name!';
    }
  }
  
  alertNow(input){
    this.alert = input.value;
  }

  /*addStudent(student){
    this.students.push(student.value);
  }*/

  removeEntry(val: number){
    this.studentList.splice(val,1);  
  }

}
