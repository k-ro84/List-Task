import { Component, OnInit, Input } from '@angular/core';

import {Task} from '../Task'
import { TASKS } from '../mock-tasks'
/* a el le funciono ../../y demas aca no lo toma asi*/ 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


tasks: Task[]=TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
