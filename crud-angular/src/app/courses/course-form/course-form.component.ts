import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder, private courseService: CoursesService, 
    private _snackBar: MatSnackBar, private location: Location) { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.courseService.save(this.form.value)
    .subscribe(result =>
      this.onSucces(), error => this.onError()
    );
    
  }

  onCancel() {
    this.location.back();
  }

  private onSucces() {
    this._snackBar.open('Curso salvo com sucesso!!', '', { duration: 3000 })
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 })
  }
}
