import {Injectable} from "@angular/core";
import {Booking} from "./models/booking.model";
import {Customer} from "./models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  booking: Booking = {
    session: {
      movieTitle: '',
      date: '',
      time: ''
    },
    customer: {
      firstName: '',
      lastName: '',
      email: ''
    },
    seats: [],
    adults: 0,
    childrens: 0,
  }

  constructor() {}

}
