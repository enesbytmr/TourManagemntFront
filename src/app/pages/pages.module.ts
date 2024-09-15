import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';
import { WidgetModule } from '../shared/widget/widget.module';

import { PagesRoutingModule } from './pages-routing.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgPipesModule } from 'ngx-pipes';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DndModule } from 'ngx-drag-drop';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UIModule } from './ui/ui.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { MapsModule } from './maps/maps.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    UIModule,
    NgPipesModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    DndModule,
    FullCalendarModule,
    IconsModule,
    ChartModule,
    FormModule,
    TablesModule,
    MapsModule,
    LeafletModule,
    WidgetModule,
    SimplebarAngularModule
  ],
  providers: [
  ]
})
export class PagesModule { }
