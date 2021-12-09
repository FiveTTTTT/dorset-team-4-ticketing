import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {this.toggleSeats()}

  toggleSeats() : void {
    let component = $("#select-seat");
    this.data.booking.adults > 0 ? component.show() : component.hide();
  }

}
