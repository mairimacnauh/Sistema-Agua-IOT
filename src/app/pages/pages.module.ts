import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';
import {HeaderComponent} from '../header/header.component';
import {PagesRoutingModule} from './pages-routing.module'

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
