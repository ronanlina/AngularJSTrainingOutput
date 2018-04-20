import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { OrderModule } from 'ngx-order-pipe';

import { StudentwService } from './services/student/studentw.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipePipe,
    SubjectFormComponent,
    HomeComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    AppRoutingModule
  ],
  providers: [StudentwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
