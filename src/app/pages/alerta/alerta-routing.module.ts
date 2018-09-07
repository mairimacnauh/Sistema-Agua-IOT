import { NgModule } from '@angular/core';
import { AlertaComponent} from './alerta.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: AlertaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AlertaRoutingModule { }
