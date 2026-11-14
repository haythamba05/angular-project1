import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  title = 'Task Manager';
  comdelete = false;

  rename() {
    this.title = 'mes taches';
  }
}