import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  customer: Customer = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {}

  submitCustomer(): void {

  }

}
