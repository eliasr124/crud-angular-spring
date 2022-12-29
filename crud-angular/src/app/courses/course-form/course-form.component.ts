import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private courseService: CoursesService, private _snackBar: MatSnackBar) { 
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.courseService.save(this.form.value)
    .subscribe(result =>
      console.log(result), error => this.onError()
    );
    
  }

  onCancel() {
    console.log("cancel");
    
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 })
  }
}
