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

  delete(id: string) {
    return this.http.delete<User>(`api/users/` + id).pipe(
      map((user) => {
        return user;
      })
    );
  }
}
