import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {HeaderComponent} from '../header/header.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'registro', pathMatch: 'full'},
      {path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)},
      {path: 'alerta', loadChildren: () => import('./alerta/alerta.module').then(m => m.AlertaModule)},
      {path: 'estadistica', loadChildren: () => import('./estadistica/estadistica.module').then(m => m.EstadisticaModule)},

      { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)}
    ]
  }
];

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule {
}
