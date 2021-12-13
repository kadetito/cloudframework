import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() isExpanded!: boolean;
  constructor() {}

  ngOnInit() {
    console.log(this.isExpanded);
  }
}
