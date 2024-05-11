import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Reservation} from "../model/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation`);
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
  }

  createReservation(reservation: Reservation): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/reservation`, reservation);
  }

  updateReservation(id: number, newReservation: Reservation): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/reservation/${id}`, newReservation);
  }

  deleteReservation(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/reservation/${id}`);
  }

  getReservationPrice(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/reservation/${id}/price`);
  }


}
