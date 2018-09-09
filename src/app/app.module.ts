import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes} from '@angular/router';
import { UsuariosService} from './servicios/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule} from '@angular/forms';
import { RegistroComponent} from './pages/registro/registro.component';
import { AlertaComponent} from './pages/alerta/alerta.component';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'usuarios/:id', component: UsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    RegistroComponent,
    AlertaComponent,
    EstadisticaComponent
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
