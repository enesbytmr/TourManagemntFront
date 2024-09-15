import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTourComponent } from './add-tour/add-tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { ActiveToursComponent } from './active-tours/active-tours.component';
import { InactiveToursComponent } from './inactive-tours/inactive-tours.component';

const routes: Routes = [
  { path: 'add-tour', component: AddTourComponent },
  { path: 'tour-list', component: TourListComponent },
  { path: 'active-tours', component: ActiveToursComponent },
  { path: 'inactive-tours', component: InactiveToursComponent },
  { path: '', redirectTo: 'tour-list', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }