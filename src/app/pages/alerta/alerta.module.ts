import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { AlertaComponent} from './alerta.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: AlertaComponent}
];

@NgModule({
  declarations: [
    AlertaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class AlertaModule { }
