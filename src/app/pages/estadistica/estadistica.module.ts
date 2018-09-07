import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { EstadisticaComponent} from './estadistica.component';
import { EstadisticaRoutingModule} from './estadistica-routing.module';

@NgModule({
  imports: [CommonModule, EstadisticaRoutingModule],
  exports: [EstadisticaComponent]
})
export class EstadisticaModule { }
