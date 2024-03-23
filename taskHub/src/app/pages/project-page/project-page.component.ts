import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TaskContainerComponent } from "../../components/home/task-container/task-container.component";
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-page',
    standalone: true,
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.css',
    imports: [
      HeaderComponent, 
      TaskContainerComponent,
      CommonModule
    ]
})
export class ProjectPageComponent implements OnDestroy {
  projectName: string = "Project 1";

  estilo: string = 'estilo-padrao';
  private subscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.estiloObservable.subscribe(novoEstilo => {
      this.estilo = novoEstilo;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.sharedService.resetarEstilo();
  }
}
