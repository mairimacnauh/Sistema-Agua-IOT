import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  usuarios: any[];

  constructor(private usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
