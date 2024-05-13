import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {EditComponent} from "../edit/edit.component";
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customers',
  standalone: true,
    imports: [
        DatePipe,
        EditComponent,
        NgForOf
    ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(public customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((res) => this.customers = res)
  }

}
