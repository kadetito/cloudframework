import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Columns } from '../../models/columns';
import { Contacts } from '../../models/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts[] = [];
  loading: boolean = true;
  columns: Columns[] = [
    { prop: 'firstname', name: 'Nombre' },
    { prop: 'lastname', name: 'Apellidos' },
    { prop: 'email', name: 'Email' },
    { prop: 'telefono', name: 'Teléfono' },
    { prop: 'address', name: 'Dirección' },
  ];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe((resp: any) => {
      this.contacts = resp;
    });
  }
}
