import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  createTaskForm!: FormGroup;

  @Output() newTask = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createTaskForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])]
    })

  }

  printForm() {
    // console.table(this.createTaskForm);
  }

  addTask() {
    console.log("clicked");
    this.newTask.emit(this.createTaskForm.value);
  }

}
