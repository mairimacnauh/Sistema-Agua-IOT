import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuariosService} from '../../shared/servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './patient.component.html'
})
export class PatientComponent implements OnInit {
  usuario: any;
  constructor(private route: ActivatedRoute, private  usuariosService: UsuariosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuario = this.usuariosService.getUsuario(Number(id));
  }

}
