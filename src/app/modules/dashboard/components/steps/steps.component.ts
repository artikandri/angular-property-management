import { Component } from '@angular/core';
import { StepItem } from 'src/app/core/models';
import { faExclamationCircle, faChartSimple } from '@fortawesome/free-solid-svg-icons';

const icons = {
  faExclamationCircle,
  faChartSimple
} 

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {
  icons: any = icons;

  steps: StepItem[] = [
    {
      current: 4,
      total: 6,
      instruction: "Set up your calendar",
      type: "danger",
      icon: icons.faExclamationCircle
    },
    {
      current: 2,
      total: 6,
      instruction: "Increase your bookings",
      type: "success",
      icon: icons.faChartSimple
    }
  ]
}
