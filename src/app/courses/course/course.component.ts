import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [
    { _id:'1', name: 'Angular', category: 'Front-End' }
  ];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
