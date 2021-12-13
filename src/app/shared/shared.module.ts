import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { EditContactoComponent } from './edit-contacto/edit-contacto.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    NuevoUsuarioComponent,
    NuevoContactoComponent,
    EditUsuarioComponent,
    EditContactoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgbModule,
    RouterModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
