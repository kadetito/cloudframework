import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutualsComponent } from './mutuals.component';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { MutualsRoutingModule } from './mutuals-routing.module';

@NgModule({
  declarations: [MutualsComponent],
  imports: [CommonModule, MutualsRoutingModule, MaterialModule, SharedModule],
  exports: [MutualsComponent],
})
export class MutualsModule {}
