import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SidebarComponent} from '../core/sidebar/sidebar.component';
import {NavbarComponent} from '../core/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'hospital', pathMatch: 'full'},
      {path: 'hospital', loadChildren: () => import('./hospital/hospital.module').then(m => m.HospitalModule)},
      {path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)},
      {path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)},
      {path: 'specialty', loadChildren: () => import('./specialty/specialty.module').then(m => m.SpecialtyModule)},
      {path: 'note', loadChildren: () => import('./note/note.module').then(m => m.NoteModule)},
    ]
  }
];

@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule {
}
