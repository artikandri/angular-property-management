import { Component, Input, OnInit } from '@angular/core';
import { getDayFromDate, getMonthNameFromDate } from 'src/app/utils/datetime';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() date? : any; 
  month?: String = "Jan";
  dateInMonth?: Number = 1;

  constructor() {}

  ngOnInit(): void {
    if(this.date) {
      this.month = getMonthNameFromDate(this.date);
      this.dateInMonth = getDayFromDate(this.date);
    }
  }

}
