import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Reservation} from "../../model/Reservation";
import {ReservationService} from "../../services/reservation.service";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent{
  reservation: Reservation;
  @Input() isHidden: boolean = true;
  @Output() closeEdit = new EventEmitter<void>();

  private _id: number;

  @Input()
  set id(value: number) {
    this._id = value;
    this.loadReservation();
  }

  get id(): number {
    return this._id;
  }

  loadReservation() {
    this.reservationService.getReservation(this.id).subscribe(res => {
      this.reservation = res;
    });
  }

  constructor(private reservationService: ReservationService) {
    this.reservation = {
      bookableId: 0,
      checkIn: "loading",
      checkOut: "loading",
      customerId: 0,
      id: 0,
      numberOfPeople: 0,
    }
    this._id = 0;
    this.loadReservation()
  }

  confirm() {
    this.reservationService.updateReservation(this.reservation.id, this.reservation).subscribe(res => {
      if (res) {
        console.log("Reservation updated!");
      } else {
        console.log("Reservation not updated");
      }
      close();
    });
  }

  close() {
    this.isHidden = true;
    this.closeEdit.emit()
  }
}
