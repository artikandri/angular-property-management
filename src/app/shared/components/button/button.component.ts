import { Component, Input, OnInit } from '@angular/core';
import { ButtonProps } from 'src/app/core/models';
import { getButtonClassName } from 'src/app/utils/styling';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() props? : ButtonProps;
  className: String = "";

  constructor() {}

  ngOnInit(): void {
    if(this.props?.type) {
      this.className = getButtonClassName(this.props?.type);
    }
  }

}

