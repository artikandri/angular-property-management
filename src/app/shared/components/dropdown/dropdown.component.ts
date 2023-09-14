import { Component, Input, OnInit } from '@angular/core';
import { getButtonClassName } from 'src/app/utils/styling';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  dropdownItems : any = []
  dropdownText : String = "Dropdown button"
  className: String = "";
  isActive: Boolean = false;

  @Input() props? : any;

  constructor() {}

  ngOnInit(): void {
    if(this.props?.dropdownItems) {
      this.dropdownItems = this.props?.dropdownItems || this.dropdownItems;
    }
    if(this.props?.dropdownText) {
      this.dropdownText = this.props?.dropdownText || this.dropdownText;
    }
    if(this.props?.type) {
      this.className = getButtonClassName(this.props?.type);
    }
  }

  onDropdownClick() : void {
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }
}



