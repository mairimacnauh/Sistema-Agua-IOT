import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  template: `
    <div class="grid grid-rows-5 grid-flow-col-dense h-screen">
      <div class="row-span-5">
        <app-sidebar></app-sidebar>
      </div>
      <div class="row-span-4 col-span-4">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class PagesComponent {

  constructor(private  router: Router) {
  }

}
