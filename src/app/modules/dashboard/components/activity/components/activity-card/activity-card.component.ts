import { Component, Input, OnInit } from '@angular/core';
import { ActivityItem } from 'src/app/core/models';
import { faLink } from '@fortawesome/free-solid-svg-icons';


const icons = {
  faLink
}

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {
  @Input() props?: any;
  activity? : ActivityItem;
  icons? : any = icons

  constructor() {}

  ngOnInit() : void {
    // TODO: to calculate 
    this.activity = {
      ...this.props, 
      date: "08/09/2020",
      time: "3 hours ago"
    }
  }

}
