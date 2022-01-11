import { Component, OnInit } from '@angular/core';
import { ConfirmOptions, ConfirmService } from '../../services/confirm/confirm.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private service: ConfirmService) { }

  ngOnInit() {}

  get options(): ConfirmOptions {
    return this.service.options;
  }

  onConfirm() {
    this.service.responseSubject.next(true);
    this.service.showConfirm.next(false);
  }

  onCancel() {
    this.service.responseSubject.next(false);
    this.service.showConfirm.next(false);
  }
}
