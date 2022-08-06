import { Component, OnInit, } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../Task'
/* a el le funciono ../../y demas aca no lo toma asi*/ 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


tasks: Task[]=[];

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    //like promise
  this.taskService.getTasks().subscribe(tasks=>[
    this.tasks=tasks
  ]);
  }

}
