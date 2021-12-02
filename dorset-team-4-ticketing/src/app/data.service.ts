import {Injectable} from "@angular/core";
import {Booking} from "./models/booking.model";
import {Customer} from "./models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  booking: Booking = {
    customer: {
      firstName: '',
      lastName: '',
      email: ''
    },
    seats: []
  }

  constructor() {}

}
