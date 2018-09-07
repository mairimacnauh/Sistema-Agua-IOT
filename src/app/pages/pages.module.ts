import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';
import {HeaderComponent} from '../header/header.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    PagesComponent
  ]
})
export class PagesModule { }
