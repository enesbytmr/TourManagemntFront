import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
    { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
    { path: 'tour', loadChildren: () => import('./tour/tour.module').then(m => m.TourModule) },
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
    { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
    { path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
