import { Component } from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {RoomService} from "../../services/room.service";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  constructor(private reservationService: ReservationService, public customerService: CustomerService, public roomService: RoomService) { }

  newPerson() {
    console.log('new person');
  }

  searchPerson() {
    let id:string = (prompt('Enter the ID of the person you are looking for') as string);
      this.customerService.getCustomer(+id).subscribe((res) => {
        if (res) {
          alert(`Customer ID: ${res.id}\nFirst Name: ${res.firstName}\nLast Name: ${res.lastName}\nBirth Date: ${res.birthDate}\nNationality: ${res.nationality}`)
        } else {
          alert('No person found with the ID ' + id);
        }
      });
  }

  newBooking() {
    console.log('new booking');
  }

  searchRoom() {
    let id:string = (prompt('Enter the ID of the room you are looking for') as string);
    this.roomService.getRoom(+id).subscribe((res) => {
      if (res) {
        alert(`Room ID: ${res.id}\nNumber: ${res.number}\nType: ${res.type}\nMax People: ${res.maxPeople}\nPrice per Person: ${res.priceForPerson}`)
      } else {
        alert('No room found with the ID ' + id);
      }
    });
  }

  newRoom() {
    console.log('new room');
  }

}
