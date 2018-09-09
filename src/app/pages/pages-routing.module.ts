import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';


const routes: Routes = [
  {path: '', component: PagesComponent,
    children: [
      {path: '', redirectTo: 'registro', pathMatch: 'full'},
      {path: 'estadistica', loadChildren: './estadistica/estadistica.module#EstadisticaModule'},
      {path: 'alerta', loadChildren: './alerta/alerta.module#AlertaModule'}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
