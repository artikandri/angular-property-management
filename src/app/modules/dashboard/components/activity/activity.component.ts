import { Component } from '@angular/core';
import { ActivityItem  } from 'src/app/core/models';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  notificationCount: Number = 2;
  activities : ActivityItem[] = [
    {
      datetime: "08/09/2020 08:09:10", 
      title: "Water Leak",
      address: "917 Garden Street 70th Avenue, NY",
      category: "danger",
      label: "Damage Report",
      shareCount: 3
    },
    {
      datetime: "07/09/2020 08:09:10", 
      title: "Renovation Problem",
      address: "917 Garden Street 7th Floor, Number 80",
      category: "info",
      label: "Question",
      shareCount: 2
    },
    {
      datetime: "09/09/2020 08:09:10", 
      title: "Water Activity",
      address: "917 Garden Street",
      category: "success",
      label: "Request",
      shareCount: 5
    },
    {
      datetime: "01/09/2020 08:09:10", 
      title: "Pet Friendliness",
      address: "917 Garden Street",
      category: "success",
      label: "Request",
      shareCount: 2
    }
  ]
}
