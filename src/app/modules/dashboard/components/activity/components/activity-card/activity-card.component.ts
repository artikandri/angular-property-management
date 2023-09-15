import { Component, Input, OnInit } from '@angular/core';
import { ActivityItem } from 'src/app/core/models';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { getTimeDifferences } from 'src/app/utils/datetime';


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
  hasPassedOneDay : boolean = false;

  constructor() {}

  ngOnInit() : void {
    // TODO: to calculate 
    const time = getTimeDifferences(this.props?.datetime)
    this.activity = {
      ...this.props, 
      time: time + " ago"
    }
    this.hasPassedOneDay = time.includes("day");
  }

}
