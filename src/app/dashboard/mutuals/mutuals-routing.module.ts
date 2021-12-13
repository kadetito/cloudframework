import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutualsComponent } from './mutuals.component';

const routes: Routes = [
  {
    path: '',
    component: MutualsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MutualsRoutingModule {}
