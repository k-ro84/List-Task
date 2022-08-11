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
  this.taskService.getTasks().subscribe(tasks=>(
    this.tasks=tasks
  ));
  }

  deleteTask(task:Task){
   
    this.taskService
    .deleteTask(task)
    .subscribe(
      () =>
      (this.tasks=this.tasks.filter( (t) =>{ 
        
        return t.id !==task.id}) ) 
     )
  }

   toggleReminder(task:Task){
    task.reminder = !task.reminder
    //console.log(task)de esta manera muestra todo el task que se esta editando //
    //console.log(task.reminder)aca solo muestra solo el valor f o t//
   this.taskService.updateTaskReminder(task).subscribe();
  }

addTask(task:Task){
 this.taskService.addTask(task).subscribe((task)=>[
  this.tasks.push(task)])
}

}
