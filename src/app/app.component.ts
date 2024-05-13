import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {PanelComponent} from "./panel/panel.component";
import {CustomersComponent} from "./customers/customers.component";
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ReservationsComponent, PanelComponent, CustomersComponent, RoomsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-project-m320-webapp';
}
