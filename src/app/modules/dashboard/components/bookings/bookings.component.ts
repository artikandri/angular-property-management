import { Component, OnInit } from '@angular/core';
import { BookingItem } from 'src/app/core/models';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})

export class BookingsComponent implements OnInit {
  notificationCount : Number = 2;
  bookings: BookingItem[] = [
    {
      url: "https://pixabay.com/get/gc80cc7f4af7ade2ad5d209660c4b51b3d085340b056ea7cce24ff40a46d83c0501b3ae012537a4f68123f295fb77520d_640.jpg",
      name: "196 Kansas Avenue",
      from: "24/08/2020",
      to: "01/09/2020",
      total: 2178.78,
      currency: "$",
    },
    {
      url: "https://pixabay.com/get/g9e121957935e4ad4471e21c700a8dd2882e5c90cce9fcde683e38da9dbe6642894748ff7a2ef781722c19952bb49c882_640.jpg",
      name: "506 Gotham Center On 42nd Street",
      from: "28/08/2020",
      to: "03/09/2020",
      total: 2789.78,
      currency: "$",
    },
    {
      url: "https://pixabay.com/get/gc73756fe2e9e44d0c6b7e09fbca4a9c8e74ab5f4f0d60e79f19ec11d9795333405822b6b8289ed3d8f3cf5c655414deda44a1dbbe9a25003e3530dfbf0b04649_640.jpg",
      name: "917 Garden Street",
      from: "01/08/2020",
      to: "09/08/2020",
      total: 2178.78,
      currency: "$",
    }
  ]

  ngOnInit() : void { 
    const bookings : BookingItem[] = this.bookings.map((booking: BookingItem)=> {
      booking['duration'] = "7 days"
      return booking; 
    })
    this.bookings = bookings;
  }

}
