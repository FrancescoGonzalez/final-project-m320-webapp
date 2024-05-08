import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../model/Reservation";
import {ReservationService} from "../../services/reservation.service";
import {DatePipe, NgForOf} from "@angular/common";

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

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(res => {
      this.reservations = res;
    });
  }

}
