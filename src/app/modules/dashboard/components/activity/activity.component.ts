import { Component } from '@angular/core';
import { ActivityItem  } from 'src/app/core/models';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  activities : ActivityItem[] = [
    {
      datetime: "08/09/2020 08:09:10", 
      title: "Pet Friendliness",
      address: "917 Garden Street",
      category: "question",
      shareCount: 2
    },
    {
      datetime: "08/09/2020 08:09:10", 
      title: "Pet Friendliness",
      address: "917 Garden Street",
      category: "question",
      shareCount: 2
    },
    {
      datetime: "08/09/2020 08:09:10", 
      title: "Pet Friendliness",
      address: "917 Garden Street",
      category: "question",
      shareCount: 2
    },
    {
      datetime: "08/09/2020 08:09:10", 
      title: "Pet Friendliness",
      address: "917 Garden Street",
      category: "question",
      shareCount: 2
    }
  ]
}
