import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TaskContainerComponent } from "../task-container/task-container.component";
import { StatusTodayComponent } from "../status-today/status-today.component";
import { NextTaskComponent } from "../next-task/next-task.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [
        NgOptimizedImage,
        TaskContainerComponent,
        StatusTodayComponent,
        NextTaskComponent
    ]
})
export class HeaderComponent {
  srcSvgClosed: string = "/assets/burger-menu-purple.svg";
  srcSvgOpen: string = "/assets/burger-menu-grey.svg";

}
