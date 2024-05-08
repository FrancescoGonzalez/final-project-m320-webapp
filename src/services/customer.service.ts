import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/customer`);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/customer/${id}`);
  }

  createCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/customer`, customer);
  }
}
