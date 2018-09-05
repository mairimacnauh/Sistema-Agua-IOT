import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes} from '@angular/router';
import { UsuariosService} from './servicios/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { RegistroComponent} from './pages/registro/registro.component';
import {AlertaComponent} from './pages/alerta/alerta.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'pages', component: PagesComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'usuarios/:id', component: UsuarioComponent},
  {path: 'registrocomp', component: RegistroComponent, outlet: 'registro'},
  {path: 'alertacomp', component: AlertaComponent, outlet: 'registro'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    PagesComponent,
    RegistroComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
