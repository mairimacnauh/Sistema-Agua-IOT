import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {UsuariosService} from './shared/servicios/usuarios.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
