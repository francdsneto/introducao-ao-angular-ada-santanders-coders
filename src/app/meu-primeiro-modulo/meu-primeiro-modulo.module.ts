import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPrimeiroComponent } from './meu-primeiro-componente/meu-primeiro.component';

@NgModule({
  declarations: [MeuPrimeiroComponent],
  imports: [CommonModule],
  exports: [MeuPrimeiroComponent],
})
export class MeuPrimeiroModuloModule {}
