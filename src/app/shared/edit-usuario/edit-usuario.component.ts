import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Contacts } from '../../models/contacts';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss'],
})
export class EditUsuarioComponent implements OnInit {
  @Input() iden: any;
  users: any;
  contactusers: Contacts[] = [];
  editUserForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private userService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.getUsersByID(this.iden).subscribe((respuesta: any) => {
      this.users = respuesta;

      this.editUserForm = new FormGroup({
        id: new FormControl(this.users.id, Validators.required),
        firstname: new FormControl(this.users.firstname, Validators.required),
        lastname: new FormControl(this.users.lastname, Validators.required),
        username: new FormControl(this.users.username, Validators.required),
        email: new FormControl(this.users.email, Validators.required),
        birthday: new FormControl(this.users.birthday),
        password: new FormControl(this.users.password, Validators.required),
        role: new FormControl(''),
      });
    });

    this.userService.getContactsByID(this.iden).subscribe((resp: any) => {
      this.contactusers = resp;
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.editUserForm.invalid) {
      return;
    }
    this.userService
      .postEdit(this.editUserForm.value)
      .subscribe((resp: any) => {
        console.log(resp);
        Swal.fire({
          title: 'El usuario ha sido modificado con éxito',
          confirmButtonText: 'Aceptar',
        }).then((resp) => {
          this.router.navigate(['/dashboard/users']).then(() => {
            window.location.reload();
          });
          this.userService.closer.emit({ closer: 'close' });
        });
      });
  }
}
