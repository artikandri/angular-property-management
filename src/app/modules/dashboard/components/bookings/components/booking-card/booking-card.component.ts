import { Component, Input } from '@angular/core';
import { BookingItem } from 'src/app/core/models';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent {
  @Input() props?: BookingItem;

  constructor() {}

}
