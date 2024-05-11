import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../model/Reservation";
import {ReservationService} from "../../services/reservation.service";
import {CustomerService} from "../../services/customer.service";
import {RoomService} from "../../services/room.service";
import {DatePipe, NgForOf} from "@angular/common";
import {EditComponent} from "../edit/edit.component";

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    EditComponent
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService, public customerService: CustomerService, public roomService: RoomService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(res => {
      this.reservations = res;
    });
  }

  editingReservationId: number | null = null;

  startEditing(id: number) {
    this.editingReservationId = id;
  }

  getBookable(id: number): void {
    this.roomService.getRoom(id).subscribe(res => alert(`Room ID: ${res.id}\nNumber: ${res.number}\nType: ${res.type}\nMax People: ${res.maxPeople}\nPrice per Person: ${res.priceForPerson}`))
  }

  getCustomer(id: number): void {
    this.customerService.getCustomer(id).subscribe(res => alert(`Customer ID: ${res.id}\nFirst Name: ${res.firstName}\nLast Name: ${res.lastName}\nBirth Date: ${res.birthDate}\nNationality: ${res.nationality}`))
  }

  protected readonly CustomerService = CustomerService;
}
