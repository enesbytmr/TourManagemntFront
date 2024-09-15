import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationRoutingModule } from './reservation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule,
    AddReservationComponent, // Import standalone component
    ReservationListComponent // Import standalone component
  ]
})
export class ReservationModule { }
