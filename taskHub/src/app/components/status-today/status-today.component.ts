import { Component } from '@angular/core';

@Component({
  selector: 'app-status-today',
  standalone: true,
  imports: [],
  templateUrl: './status-today.component.html',
  styleUrl: './status-today.component.css'
})
export class StatusTodayComponent {
  statusUser: string = 'free';
  dateToday: string = '13 Nov 2024'; 
}
