import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {SpecialtyComponent} from './specialty.component';

const routes: Routes = [
  {
    path: '',
    component: SpecialtyComponent,
    children: [
      { path: ':id', loadChildren: () => import('../patient/patient.module').then(m => m.PatientModule)}
    ]
  }
];

@NgModule({
  declarations: [
    SpecialtyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpecialtyModule {
}
