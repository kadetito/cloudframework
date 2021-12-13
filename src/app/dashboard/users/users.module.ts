import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, SharedModule],
  exports: [UsersComponent],
})
export class UsersModule {}
