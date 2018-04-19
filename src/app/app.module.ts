import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { OrderModule } from 'ngx-order-pipe';

import { StudentwService } from './services/student/studentw.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipePipe,
    SubjectFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule
  ],
  providers: [StudentwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
