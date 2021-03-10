import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public tasks: any[] = []

  constructor() { }

  ngOnInit(): void {

  }

  addTask(newTask: any) {
    // console.log(`new task: ${newTask}`);
    // console.table(newTask)
    this.tasks.push(newTask);
  }

}
