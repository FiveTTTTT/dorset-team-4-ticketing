import {Customer} from "./customer.model";
import {Session} from "./session.customer.model"

export class Booking {
  session: Session;
  customer: Customer;
  seats: any[];
  adults: number;
  childrens: number;
}
