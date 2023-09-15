import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from 'src/app/shared/components/calendar/calendar.component';
import { LabelComponent } from 'src/app/shared/components/label/label.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';


@NgModule({
  declarations: [
    CalendarComponent,
    LabelComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalendarComponent,
    LabelComponent,
    ButtonComponent,
    DropdownComponent
  ]

})
export class ComponentsModule { }
