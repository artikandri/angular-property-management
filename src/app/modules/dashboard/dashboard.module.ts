import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { ActivityComponent } from './components/activity/activity.component';
import { SummaryComponent } from './components/summary/summary.component';
import { StepsComponent } from './components/steps/steps.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { SummaryCardComponent } from './components/summary/components/summary-card/summary-card.component';
import { StepCardComponent } from './components/steps/components/step-card/step-card.component';
import { BookingCardComponent } from './components/bookings/components/booking-card/booking-card.component';
import { ActivityCardComponent } from './components/activity/components/activity-card/activity-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GreetingsComponent,
    ActivityComponent,
    SummaryComponent,
    StepsComponent,
    BookingsComponent,
    StepCardComponent,
    SummaryCardComponent,
    StepCardComponent,
    BookingCardComponent,
    ActivityCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
