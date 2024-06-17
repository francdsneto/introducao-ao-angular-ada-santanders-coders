import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { SobreRoutesModule } from './sobre.routing';
import { ListaContainerModule } from './lista-container/lista-container.module';

@NgModule({
  declarations: [SobreComponent],
  imports: [CommonModule, SobreRoutesModule, ListaContainerModule],
})
export class SobreModule {}
