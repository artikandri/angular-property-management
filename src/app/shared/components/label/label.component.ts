import { Component, OnInit, Input } from '@angular/core';
import { LabelProps } from 'src/app/core/models';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() props? : LabelProps;
  className : String = 'rounded-full px-2 py-1';

  constructor() {}

  ngOnInit(): void {
    if(this.props?.type) {
      this.className = getClassName(this.props?.type);
    }
  }

}

function getClassName(labelType: String) : String {
  let className = 'rounded-full px-2 py-1';
  switch(labelType) {
    case 'info':
      className += ' bg-blue-100 text-blue-700';
      break;
    case 'success':
      className += ' bg-green-100 text-green-700';
      break;
    case 'danger':
      className += ' bg-red-100 text-red-700';
      break;
    case 'warning':
      className += ' bg-orange-100 text-orange-700';
      break;
    default:
      className += ' bg-gray-100 text-gray-700';
      break;
  }
  return className;
} 