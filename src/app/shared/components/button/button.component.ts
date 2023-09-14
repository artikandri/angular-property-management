import { Component, Input, OnInit } from '@angular/core';
import { ButtonProps } from 'src/app/core/models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() props? : ButtonProps;

  constructor() {}

  ngOnInit(): void {
      
  }

}
