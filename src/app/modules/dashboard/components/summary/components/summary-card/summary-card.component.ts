import { Component, OnInit, Input } from '@angular/core';
import { SummaryCardProps } from "src/app/core/models"

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})

export class SummaryCardComponent implements OnInit {
  @Input() props?: SummaryCardProps;

  ​constructor() {}

  ​ngOnInit(): void {}
}
