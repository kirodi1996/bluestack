import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  campaignDate: Date;
  @Input() createdOnDate: any;
  @Output() campaignDateChange = new EventEmitter();

  ngOnInit() {

  }

  ngOnChanges(changes) {
    if (this.createdOnDate) {
      this.campaignDate = new Date(this.createdOnDate);
    }
  }

  scheduleDateChange() {
    debugger;
    this.campaignDateChange.emit(this.campaignDate);
  }
}
