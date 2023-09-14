import { Component, OnInit, Input } from '@angular/core';
import { LabelProps } from 'src/app/core/models';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() props? : LabelProps;

  constructor() {}

  ngOnInit(): void {
      
  }

}
