import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { HospittalComponent} from './hospittal.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: HospittalComponent}
];

@NgModule({
  declarations: [
    HospittalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HospitalModule { }
