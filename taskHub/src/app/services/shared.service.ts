import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private estilos: string[] = ['novo-estilo', 'outro-estilo'];
  private estiloIndex = 0;

  private estiloSubject = new BehaviorSubject<string>(this.estilos[0]);

  estiloObservable = this.estiloSubject.asObservable();

  atualizarEstilo() {
    this.estiloIndex = (this.estiloIndex + 1) % this.estilos.length;
    const novoEstilo = this.estilos[this.estiloIndex];
    this.estiloSubject.next(novoEstilo);
  }

  resetarEstilo() {
    console.log("Rezetando estilo...")

    this.estiloIndex = 0;
    this.estiloSubject.next(this.estilos[this.estiloIndex]);
  }
}