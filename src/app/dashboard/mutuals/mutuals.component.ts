import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-mutuals',
  templateUrl: './mutuals.component.html',
  styleUrls: ['./mutuals.component.scss'],
})
export class MutualsComponent implements OnInit {
  allUsers: User[] = [];
  matchForm!: FormGroup;
  formSubmitted: boolean = false;
  constructor(
    private userService: UsersService,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resp: any) => {
      this.allUsers = resp;

      this.matchForm = new FormGroup({
        userA: new FormControl('', Validators.required),
        userB: new FormControl('', Validators.required),
      });
    });
  }

  searchMatch() {
    console.log(this.matchForm.value);
    this.formSubmitted = true;
    if (this.matchForm.invalid) {
      return;
    }

    this.contactService
      .searchMatchServ(this.matchForm.value)
      .subscribe((resp: any) => {
        //this.ngOnInit();
      });
  }
}
