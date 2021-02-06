import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class PagesComponent {

  constructor(private  router: Router) { }

/*  clicRegistro() {
    this.router.navigate(['registrocomp']);
  }*/

}
