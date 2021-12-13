import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { User } from '../../models/user';
import { Columns } from '../../models/columns';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, NavigationEnd } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnDestroy {
  @ViewChild('template') template: ElementRef | undefined;
  @Input() rows: User[] = [];
  @Input() columns: Columns[] = [];
  @Input() loading: boolean = true;
  columnMode = ColumnMode.force;
  SelectionType = SelectionType;
  selected: any = [];
  temp = [];
  modalRef!: BsModalRef;
  identificador!: any;
  edit: boolean = false;
  href!: string;
  url!: string;

  config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-xl',
  };
  cerrar!: any;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private usersService: UsersService
  ) {}

  ngAfterViewInit(): void {
    this.usersService.closer.subscribe((close) => {
      this.cerrar = close.closer;
      if (this.cerrar === 'close') {
        this.close(this.cerrar);
      }
    });
    this.rows = this.rows;
    this.loading = false;
    let link = this.router.url.substring(11, this.router.url.length - 0);
    this.href = link;
    console.log(this.href);
  }

  ngOnDestroy() {}
  onSelect() {
    this.openModal(this.template, null);
  }

  openModal(template: any, nou: any) {
    if (nou === 'nou') {
      this.edit = false;
      this.identificador = null;
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, this.config)
      );
      return;
    } else {
      this.edit = true;
      this.identificador = this.selected[0];
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, this.config)
      );
      return;
    }
  }

  close(template: any): void {
    this.modalRef.hide();
    this.rows = this.rows;
    this.loading = false;
    return;
  }

  onActivate() {
    console.log('Activate Event');
  }

  updateFilter(event: any) {
    let lowerValue = event.target.value.toLowerCase();
    this.rows = this.rows.filter(
      (item) =>
        item.firstname?.toLowerCase().indexOf(lowerValue) !== -1 ||
        item.lastname?.toLowerCase().indexOf(lowerValue) !== -1 ||
        item.username?.toLowerCase().indexOf(lowerValue) !== -1 ||
        item.birthday?.toLowerCase().indexOf(lowerValue) !== -1 ||
        item.email?.toLowerCase().indexOf(lowerValue) !== -1 ||
        !lowerValue
    );
  }
}
