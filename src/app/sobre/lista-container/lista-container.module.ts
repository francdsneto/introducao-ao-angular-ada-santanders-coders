import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContainerComponent } from './lista-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListaContainerComponent],
  exports: [ListaContainerComponent],
})
export class ListaContainerModule {}
