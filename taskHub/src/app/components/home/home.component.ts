import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { StatusTodayComponent } from "../status-today/status-today.component";
import { TaskContainerComponent } from "../task-container/task-container.component";
import { NextTaskComponent } from "../next-task/next-task.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, StatusTodayComponent, TaskContainerComponent, NextTaskComponent]
})
export class HomeComponent {

}
