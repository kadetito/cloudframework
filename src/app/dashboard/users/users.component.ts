import { Component, OnDestroy, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';
import { Columns } from '../../models/columns';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = true;

  columns: Columns[] = [
    { prop: 'firstname', name: 'Nombre' },
    { prop: 'lastname', name: 'Apellidos' },
    { prop: 'username', name: 'Usuario' },
    { prop: 'email', name: 'E-mail' },
    { prop: 'birthday', name: 'Nacimiento' },
    { prop: 'role', name: 'Rol' },
  ];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((respuesta: any) => {
      this.users = respuesta;
    });
  }
}
