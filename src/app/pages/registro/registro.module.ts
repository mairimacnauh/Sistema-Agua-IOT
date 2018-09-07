import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { RegistroComponent} from './registro.component';
import { RegistroRoutingModule} from './regidtro-routing.module';

@NgModule({
  imports: [CommonModule, RegistroRoutingModule],
  exports: [RegistroComponent]
})
export class RegistroModule { }
