import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { EstadisticaComponent} from './estadistica.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: EstadisticaComponent}
];

@NgModule({
  declarations: [
    EstadisticaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstadisticaModule { }
