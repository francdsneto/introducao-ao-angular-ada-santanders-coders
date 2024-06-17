import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro.component.html',
  styleUrl: './meu-primeiro.component.css',
})
export class MeuPrimeiroComponent {
  public year: number = 2024;

  somarAno() {
    this.year++;
  }

  subtrairAno() {
    this.year--;
  }
}
