import { Component, Input, OnInit } from '@angular/core';
import { BookingItem } from 'src/app/core/models';
import { getDayDifferences } from 'src/app/utils/datetime';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent implements OnInit {
  @Input() props?: BookingItem;
  dateFrom: String = "24/08/2020";
  dateTo: String = "01/09/2020";
  dayDiff : Number = 0;
  totalBookingPrice: String = "0";

  constructor() {}

  ngOnInit(): void {
    if (this.props?.from && this.props?.to) {
      this.dateFrom = convertDate(this.props.from, "/", ".");
      this.dateTo = convertDate(this.props.to, "/", ".");
      this.dayDiff = getDayDifferences(`${this.props.from.toString()} 00:00:00`, `${this.props.to.toString()} 00:00:00`); 
    } 
    if(this.props?.total) {
      this.totalBookingPrice = this.props.total.toLocaleString('de');
    }
  }
}

function convertDate(oldDate : String, separator: string, newSeparator: string) : String {
  const dates = oldDate.split(separator);
  return [dates[0], dates[1]].join(newSeparator);
}




