import { Component, Input, OnInit } from '@angular/core';

import { Contacts } from '../../models/contacts';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styleUrls: ['./edit-contacto.component.scss'],
})
export class EditContactoComponent implements OnInit {
  @Input() iden: any;
  contacts: any;
  editContactForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private contactService: ContactsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactService.getUsersByID(this.iden).subscribe((respuesta: any) => {
      this.contacts = respuesta;

      this.editContactForm = new FormGroup({
        id: new FormControl(this.contacts.id, Validators.required),
        firstname: new FormControl(
          this.contacts.firstname,
          Validators.required
        ),
        lastname: new FormControl(this.contacts.lastname, Validators.required),
        email: new FormControl(this.contacts.email, Validators.required),
        telefono: new FormControl(this.contacts.telefono, Validators.required),
        address: new FormControl(this.contacts.address, Validators.required),
      });
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.editContactForm.invalid) {
      return;
    }
    this.contactService
      .postEdit(this.editContactForm.value)
      .subscribe((resp: any) => {
        console.log(resp);
        Swal.fire({
          title: 'El usuario ha sido modificado con éxito',
          confirmButtonText: 'Aceptar',
        }).then((resp) => {
          this.router.navigate(['/dashboard/contacts']).then(() => {
            window.location.reload();
          });
          this.contactService.closer.emit({ closer: 'close' });
        });
      });
  }
}
