import { Component, Input, OnInit } from '@angular/core';

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
  }

}
