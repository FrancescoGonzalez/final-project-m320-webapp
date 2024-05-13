import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Room} from "../../model/Room";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-rooms',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  rooms: Room[] = [];

  constructor(public roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getRooms().subscribe((res) => this.rooms = res)
  }

}
