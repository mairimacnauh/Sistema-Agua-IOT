import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../shared/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './specialty.component.html'
})
export class SpecialtyComponent implements OnInit {
  usuarios: any[];

  constructor(private usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
