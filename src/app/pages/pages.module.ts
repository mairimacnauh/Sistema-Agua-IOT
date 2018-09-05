import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RegistroComponent} from './registro/registro.component';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule} from '../app-routing.module';
import {AlertaComponent} from './alerta/alerta.component';

const routes: Routes = [
  {path: 'registrocomp', component: RegistroComponent, outlet: 'registro'},
  {path: 'alertacomp', component: AlertaComponent, outlet: 'registro'},
];

@NgModule({
  declarations: [
    RegistroComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppModule { }
