import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { TourRoutingModule } from "./tour-routing.module";
import { AddTourComponent } from "./add-tour/add-tour.component";
import { TourListComponent } from "./tour-list/tour-list.component";
import { ActiveToursComponent } from "./active-tours/active-tours.component";
import { InactiveToursComponent } from "./inactive-tours/inactive-tours.component";

@NgModule({
  declarations: [
    AddTourComponent,
    TourListComponent,
    ActiveToursComponent,
    InactiveToursComponent,
  ],
  imports: [CommonModule, TourRoutingModule, SharedModule],
})
export class TourModule {}
