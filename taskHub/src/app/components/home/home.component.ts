import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { StatusTodayComponent } from "../status-today/status-today.component";
import { TaskContainerComponent } from "../task-container/task-container.component";
import { NextTaskComponent } from "../next-task/next-task.component";
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, StatusTodayComponent, TaskContainerComponent, NextTaskComponent, CommonModule]
})
export class HomeComponent implements OnDestroy {

    estilo: string = 'estilo-padrao';
    private subscription: Subscription;

    constructor(private sharedService: SharedService) {
        this.subscription = this.sharedService.estiloObservable.subscribe(novoEstilo => {
          this.estilo = novoEstilo;
        });
      }
    
      ngOnDestroy() {
        this.subscription.unsubscribe();
      }

}
