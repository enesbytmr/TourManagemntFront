import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationRoutingModule } from './reservation-routing.module';

@NgModule({
  declarations: [
    AddReservationComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
