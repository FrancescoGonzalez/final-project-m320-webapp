import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../model/Room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/room`);
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/room/${id}`);
  }

  createRoom(room: Room): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/room`, room);
  }
}
