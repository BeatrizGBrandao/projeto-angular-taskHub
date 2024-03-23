import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { TaskContainerComponent } from "../home/task-container/task-container.component";
import { StatusTodayComponent } from "../home/status-today/status-today.component";
import { NextTaskComponent } from "../home/next-task/next-task.component";
import { SharedService } from '../../services/shared.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage,
        TaskContainerComponent,
        StatusTodayComponent,
        NextTaskComponent
    ]
})
export class HeaderComponent {
  srcSvgClosed: string = "/assets/burger-menu-purple.svg";
  srcSvgOpen: string = "/assets/burger-menu-white.svg";
  sidebarAberta: boolean = false;
  activeBtn: string = 'btn1';

  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) { }
  
  alterarEstiloDoOutro() {
    this.sharedService.atualizarEstilo();
  }

  abrirSidebar(): void {
    this.sidebarAberta = !this.sidebarAberta;
    this.alterarEstiloDoOutro(); 
  }

  setActiveBtn(btn: string) {
    this.activeBtn = btn;
    this.cdr.detectChanges();
  }

 
}


