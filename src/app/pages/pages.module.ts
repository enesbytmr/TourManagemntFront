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
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { KanbanComponent } from './kanban/kanban.component';
import { EmailModule } from './email/email.module';
import { UIModule } from './ui/ui.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { MapsModule } from './maps/maps.module';



@NgModule({
  declarations: [DashboardComponent, CalendarComponent, ChatComponent, KanbanComponent],
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
    EcommerceModule, EmailModule,
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
