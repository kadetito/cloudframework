import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UsersService {
  @Output() closer: EventEmitter<any> = new EventEmitter();

  users: any[] = [];
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<User>(`http://www.rafapenya.com/cloud/api/read_personas.php`)
      .pipe(
        map((users) => {
          console.log(users);
          return users;
        })
      );
  }

  postAdd(data: User) {
    return this.http
      .post<User>(`http://www.rafapenya.com/cloud/api/crear_personas.php`, data)
      .pipe(
        map((user) => {
          return user;
        })
      );
  }

  postAddContact(data: any) {
    return this.http
      .post<any>(`http://www.rafapenya.com/cloud/api/add_contacto.php`, data)
      .pipe(
        map((addc) => {
          return addc;
        })
      );
  }

  getUsersByID(id: number) {
    return this.http
      .get<User>(`http://www.rafapenya.com/cloud/api/persona_byid.php?id=` + id)
      .pipe(
        map((user) => {
          return user;
        })
      );
  }

  postEdit(user: User) {
    return this.http
      .post<User>(`http://www.rafapenya.com/cloud/api/editar_persona.php`, user)
      .pipe(
        map((user) => {
          return user;
        })
      );
  }

  getContactsByID(id: number) {
    return this.http
      .get<User>(
        `http://www.rafapenya.com/cloud/api/contacts_byid.php?id=` + id
      )
      .pipe(
        map((contactsuser) => {
          return contactsuser;
        })
      );
  }

  getContactsByIDDontHave(id: number) {
    return this.http
      .get<User>(
        `http://www.rafapenya.com/cloud/api/contacts_byiddonthave.php?id=` + id
      )
      .pipe(
        map((contactsuser) => {
          return contactsuser;
        })
      );
  }

  postDeleteContact(objeto: any) {
    console.log(objeto);
    return this.http
      .post<any>(
        `http://www.rafapenya.com/cloud/api/delete_contact.php`,
        objeto
      )
      .pipe(
        map((delc) => {
          return delc;
        })
      );
  }
}
