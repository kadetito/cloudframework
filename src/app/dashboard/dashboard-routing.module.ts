import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((mod) => mod.UsersModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./contacts/contacts.module').then(
            (mod) => mod.ContactsModule
          ),
      },
      {
        path: 'mutuals',
        loadChildren: () =>
          import('./mutuals/mutuals.module').then((mod) => mod.MutualsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
