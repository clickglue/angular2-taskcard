import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})



export class AppComponent {
    public tasks: Task[] = [];
    private currentTask = new Task(null, false, false);

    addTask() {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].hidden === true) {
                this.tasks.splice(i, 1);
            }
        }

        let task = new Task(this.currentTask.content, this.currentTask.completed, false);
        this.tasks.push(task);
        this.currentTask.content = null;
    }
}
