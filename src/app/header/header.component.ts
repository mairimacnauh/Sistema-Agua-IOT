import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  constructor( private rutas: Router){
  }

  links(num: number) {
    if(num === 1) {
      this.rutas.navigate(['/usuarios']);
    }
    if(num === 2) {
      this.rutas.navigate(['/registro']);
    }
    if(num === 3) {
      this.rutas.navigate(['/estadistica']);
    }
    if(num === 4) {
      this.rutas.navigate(['/alerta']);
    }
  }



}
