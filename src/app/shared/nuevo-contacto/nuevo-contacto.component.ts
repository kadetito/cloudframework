import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss'],
})
export class NuevoContactoComponent implements OnInit {
  public formSubmitted = false;

  newContactForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmitted = true;
    if (this.newContactForm.invalid) {
      return;
    }
    this.contactsService
      .postAdd(this.newContactForm.value)
      .subscribe((resp: any) => {
        console.log(resp);
        Swal.fire({
          title: 'El contacto ha sido creado con éxito',
          confirmButtonText: 'Aceptar',
        }).then((resp) => {
          this.router.navigate(['/dashboard/contacts']).then(() => {
            window.location.reload();
          });
          this.contactsService.closer.emit({ closer: 'close' });
        });
      });
  }
}
