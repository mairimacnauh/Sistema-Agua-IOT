import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="fullPage">
      <img src="https://www.iconspng.com/images/angular/angular.jpg" style="width: 150px; height: 150px;">
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HealthcareSystem';
}
