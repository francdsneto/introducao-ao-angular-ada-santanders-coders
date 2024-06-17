import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mercado';
  result!: string;
  variavelImagemComponentePai = './assets/images/avatarhumano.jpg';
  listaDeCatFacts!: Array<any>;

  receberResult(value: string) {
    this.result = value;
  }

  setarListaDeCatFacts(lista: any) {
    this.listaDeCatFacts = lista;
  }
}
