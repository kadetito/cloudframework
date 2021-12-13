import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss'],
})
export class NuevoUsuarioComponent implements OnInit {
  public formSubmitted = false;

  newUserForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    birthday: [''],
    password: ['', Validators.required],
    role: [''],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmitted = true;
    if (this.newUserForm.invalid) {
      return;
    }
    this.usersService.postAdd(this.newUserForm.value).subscribe((resp: any) => {
      console.log(resp);
      Swal.fire({
        title: 'El usuario ha sido creado con éxito',
        confirmButtonText: 'Aceptar',
      }).then((resp) => {
        this.router.navigate(['/dashboard/users']).then(() => {
          window.location.reload();
        });
        this.usersService.closer.emit({ closer: 'close' });
      });
    });
  }
}
