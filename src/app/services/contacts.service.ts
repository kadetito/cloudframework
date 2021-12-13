import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contacts } from '../models/contacts';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  @Output() closer: EventEmitter<any> = new EventEmitter();
  users: any[] = [];
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http
      .get<Contacts>(`http://www.rafapenya.com/cloud/api/read_contacts.php`)
      .pipe(
        map((contacts) => {
          console.log(contacts);
          return contacts;
        })
      );
  }

  postAdd(data: Contacts) {
    return this.http
      .post<Contacts>(
        `http://www.rafapenya.com/cloud/api/crear_contacto.php`,
        data
      )
      .pipe(
        map((user) => {
          return user;
        })
      );
  }

  getUsersByID(id: number) {
    return this.http
      .get<Contacts>(
        `http://www.rafapenya.com/cloud/api/contacto_byid.php?id=` + id
      )
      .pipe(
        map((contact) => {
          return contact;
        })
      );
  }

  searchMatchServ(data: any) {
    return this.http
      .post<any>(`http://www.rafapenya.com/cloud/api/search_match.php`, data)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  postEdit(contact: Contacts) {
    return this.http
      .post<Contacts>(
        `http://www.rafapenya.com/cloud/api/editar_contacto.php`,
        contact
      )
      .pipe(
        map((contact) => {
          return contact;
        })
      );
  }

  // getUserById(id: number) {
  //   return this.http.get<any>(`api/users/` + id).pipe(
  //     map((user) => {
  //       return user;
  //     })
  //   );
  // }

  // create(user: User) {
  //   return this.http.post<User>(`api/users/create`, user).pipe(
  //     map((user) => {
  //       return user;
  //     })
  //   );
  // }

  // update(user: User) {
  //   return this.http.post<User>(`api/users/update`, user).pipe(
  //     map((user) => {
  //       return user;
  //     })
  //   );
  // }

  // delete(id: string) {
  //   return this.http.delete<User>(`api/users/` + id).pipe(
  //     map((user) => {
  //       return user;
  //     })
  //   );
  // }
}
