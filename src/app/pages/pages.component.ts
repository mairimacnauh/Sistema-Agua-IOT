///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
  }
  clicRegistro() {
    this.router.navigate(['registrocomp']);
  }

}
