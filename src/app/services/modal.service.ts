import {
  EventEmitter,
  Injectable,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  @Output() identificador: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
