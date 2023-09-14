import { Component } from '@angular/core';
import { MenuItem } from 'src/app/core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   menuItems : MenuItem[] = [
    {
      text: "Dashboard",
      url: "/",
      notificationCount: 0,
    },
    {
      text: "Inbox",
      url: "/inbox",
      notificationCount: 4,

    },
    {
      text: "Calendar",
      url: "/calendar",
      notificationCount: 0,
    },
    {
      text: "Insights",
      url: "/insights",
      notificationCount: 0,
    },
    {
      text: "Listing",
      url: "/listings",
      notificationCount: 0,
    }
]



}
