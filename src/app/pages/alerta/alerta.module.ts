import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { AlertaComponent} from './alerta.component';
import { AlertaRoutingModule} from './alerta-routing.module';

@NgModule({
  imports: [CommonModule, AlertaRoutingModule],
  exports: [AlertaComponent]
})
export class AlertaModule { }