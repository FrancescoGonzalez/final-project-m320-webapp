import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../model/Reservation";
import {ReservationService} from "../../services/reservation.service";
import {CustomerService} from "../../services/customer.service";
import {RoomService} from "../../services/room.service";
import {DatePipe, NgForOf} from "@angular/common";
import {Customer} from "../../model/Customer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
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

  getCustomer(id: number): Observable<Customer> {
    return this.customerService.getCustomer(id);
  }

  protected readonly CustomerService = CustomerService;
}
