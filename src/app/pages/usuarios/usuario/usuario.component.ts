import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuariosService} from '../../../servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {
  usuario: any;
  constructor(private route: ActivatedRoute, private  usuariosService: UsuariosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuario = this.usuariosService.getUsuario(Number(id));
  }

}
