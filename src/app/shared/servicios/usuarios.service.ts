import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  usuarios = [
    {id: 1, nombre: 'Andres', apellido: 'Velasquez'},
    {id: 2, nombre: 'Sergio', apellido: 'Cervera'},
    {id: 3, nombre: 'Karla', apellido: 'Vieira'},
    {id: 4, nombre: 'Diego', apellido: 'Henao'},
    {id: 5, nombre: 'Frank', apellido: 'Salinas'},
    {id: 6, nombre: 'Javier', apellido: 'Leal'},
    {id: 7, nombre: 'Andres', apellido: 'Orjuela'},
    {id: 8, nombre: 'Jenny', apellido: 'Leal'},
    {id: 9, nombre: 'Lizeth', apellido: 'Velasquez'},
    {id: 10, nombre: 'Ricardo', apellido: 'Pari'}
  ];

  constructor() {
  }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuario(id: number) {
    return this.getUsuarios().find(usuario => usuario.id === id);
  }
}
