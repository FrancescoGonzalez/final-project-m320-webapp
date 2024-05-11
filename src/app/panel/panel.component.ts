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
    let firstname:string = (prompt('Enter the first name') as string);
    let lastname:string = (prompt('Enter the last name') as string);
    let birth:string = (prompt('Enter the birth date', "yyyy-MM-dd") as string);
    let nationality:string = (prompt('Enter the nationality') as string);

    let customer = {
      id: 0,
      firstName: firstname,
      lastName: lastname,
      birthDate: birth,
      nationality: nationality
    }

    this.customerService.createCustomer(customer).subscribe((res) => {
      if (!res) {
        alert('Error creating customer');
      }
    });

    this.customerService.getCustomers().subscribe((res) => {
      for (let customer of res) {
        if (customer.firstName == firstname && customer.lastName == lastname) {
          alert("Customer created, id=" + customer.id)
        }
      }
    })
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
    let customerId:number = +(prompt('Enter the ID of the customer') as string);
    let roomId:number = +(prompt('Enter the ID of the room') as string);
    let numberOfPeople:number = +(prompt('Enter the number of people') as string);
    let checkIn:string = (prompt('Enter the check-in date', "yyyy-MM-dd") as string);
    let checkOut:string = (prompt('Enter the check-out date', "yyyy-MM-dd") as string);

    let reservation = {
      bookableId: roomId,
      checkIn: checkIn,
      checkOut: checkOut,
      customerId: customerId,
      id: 0,
      numberOfPeople: numberOfPeople,
    }

    this.reservationService.createReservation(reservation).subscribe((res) => {
      if (res) {
        alert('Reservation created successfully');
      } else {
        alert('Error creating reservation');
      }
    });

    location.reload();
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
    let number = +(prompt("Enter the number of the new room") as string);
    let maxPeople = +(prompt("Enter the max number of people of the new room") as string);
    let price = +(prompt("Enter the price per person of the new room") as string);

    let room = {
      id: 0,
      number: number,
      type: "DOUBLE",
      maxPeople: maxPeople,
      priceForPerson: price
    }

    this.roomService.createRoom(room).subscribe((res) => {
      if (!res) {
        alert('Error creating room');
      }
    });

    this.roomService.getRooms().subscribe((res) => {
      for (let room of res) {
        if (room.number == number && room.maxPeople == maxPeople && room.priceForPerson == price) {
          alert("Room created, id=" + room.id)
        }
      }
    })
  }
}
