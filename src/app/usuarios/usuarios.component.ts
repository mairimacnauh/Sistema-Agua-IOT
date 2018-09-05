import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[];
  constructor( private usuariosService: UsuariosService) { }
  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
