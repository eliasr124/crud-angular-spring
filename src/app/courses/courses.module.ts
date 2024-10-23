import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CoursesRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesModule { }
