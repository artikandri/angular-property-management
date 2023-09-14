import { Component, Input } from '@angular/core';
import { StepCardProps } from 'src/app/core/models';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss']
})

export class StepCardComponent {
  @Input() props?: StepCardProps;

  constructor() {}
}
