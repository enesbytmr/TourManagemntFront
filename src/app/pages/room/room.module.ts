import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoomRoutingModule,
    AddRoomComponent, // Import standalone component
    RoomListComponent // Import standalone component
  ]
})
export class RoomModule { }
