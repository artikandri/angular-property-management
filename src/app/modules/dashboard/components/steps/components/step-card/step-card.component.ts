import { Component, Input, OnInit } from '@angular/core';
import { StepCardProps } from 'src/app/core/models';
import { getProgressBackground, getProgressForeground, getProgressText } from 'src/app/utils/styling';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss']
})

export class StepCardComponent implements OnInit {
  @Input() props?: StepCardProps;
  progressStyle: String = "";
  progressForeground: String = "";
  progressBackground: String = "";
  iconColor : String = "";

  constructor() {}

  ngOnInit(): void {
    if(this.props?.total && this.props?.current) {
      const progress : number = (this.props?.current / this.props?.total) * 100;
      this.progressStyle = `width: ${progress}%`;
    }
    if(this.props?.type) {
      this.progressForeground = getProgressForeground(this.props?.type);
      this.progressBackground = getProgressBackground(this.props?.type);  
      this.iconColor = getProgressText(this.props?.type);
    }
  }

}
