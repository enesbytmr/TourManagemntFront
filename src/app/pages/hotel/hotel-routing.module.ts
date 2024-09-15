import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

const routes: Routes = [
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'hotel-list', component: HotelListComponent },
  { path: '', redirectTo: 'hotel-list', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }