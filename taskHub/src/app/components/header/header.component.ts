import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TaskContainerComponent } from "../task-container/task-container.component";
import { StatusTodayComponent } from "../status-today/status-today.component";
import { NextTaskComponent } from "../next-task/next-task.component";
import { SharedService } from '../../services/shared.service';

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
  sidebarAberta: boolean = false;

  constructor(private sharedService: SharedService) { }
  
  alterarEstiloDoOutro() {
    this.sharedService.atualizarEstilo();
  }

  abrirSidebar(): void {
    this.sidebarAberta = !this.sidebarAberta;

    this.alterarEstiloDoOutro(); 
  }
}


