import { NgModule } from '@angular/core';
import { RegistroComponent} from './registro.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: RegistroComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
