import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { MutualsComponent } from './mutuals/mutuals.component';
import { HomeModule } from './home/home.module';
import { MutualsModule } from './mutuals/mutuals.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
    UsersModule,
    ContactsModule,
    HomeModule,
    MutualsModule,
  ],
  exports: [
    SharedModule,
    UsersModule,
    ContactsModule,
    MaterialModule,
    HomeModule,
    MutualsModule,
  ],
})
export class DashboardModule {}
