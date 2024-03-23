import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css'
})
export class TaskContainerComponent {

}
