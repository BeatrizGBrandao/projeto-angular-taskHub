import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RecentInfoComponent } from "./recent-info/recent-info.component";

@Component({
    selector: 'app-next-task',
    standalone: true,
    templateUrl: './next-task.component.html',
    styleUrl: './next-task.component.css',
    imports: [
      RecentInfoComponent,
      CommonModule,
      NgOptimizedImage
    ]
})
export class NextTaskComponent {
  dateTask: string = "March 03";
  hourTask: string = "21h - 22h";
  titleTask: string = "Site";
  descTask: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero debitis quia minima, dignissimos reprehenderit asperiores accusamus nesciunt quisquam molestiae ea, eum ut maiores unde voluptatum ex dolore labore voluptas?";

}
