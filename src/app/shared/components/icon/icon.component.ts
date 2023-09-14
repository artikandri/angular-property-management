import { Component, Input, OnInit } from '@angular/core';
import { IconProps } from "src/app/core/models"

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() props? : IconProps;

  constructor() {}

  ngOnInit(): void {
      
  }
}
