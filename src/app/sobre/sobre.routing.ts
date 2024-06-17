import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre.component';

const routes: Routes = [
  {
    path: '',
    component: SobreComponent,
  },
];

export const SobreRoutesModule = RouterModule.forChild(routes);
