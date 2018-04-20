import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { StudentComponent } from './components/student/student.component';

const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'subject', component: SubjectFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}