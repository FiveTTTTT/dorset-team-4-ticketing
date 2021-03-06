import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {doc} from "@angular/fire/firestore";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(public data: DataService, public router: Router, private store: AngularFirestore) { }

  ngOnInit() {this.toggleSeats(false)}

  updatePlaces() : void {
    this.data.booking.adults > 0 ? this.toggleSeats(true) : this.toggleSeats(false);
    this.data.booking.seats = [];
    $('.seat').each(function () {
      $(this).removeClass('selected');
    })
  }

  toggleSeats(value) : void {
    let component = $("#select-seat");
    let button = $("#booking-button")
    if(value) {
      component.show();
      button.show();
      return;
    }
    component.hide();
    button.hide();
  }

  confirmBooking() : void {
    let nbSeat = parseInt(String(this.data.booking.adults)) + parseInt(String(this.data.booking.childrens));
    let nbCurrentSeat = this.data.booking.seats.length;
    if(nbCurrentSeat !== nbSeat){
      alert('Choisissez vos places');
      return;
    }
    this.store
      .collection("orders")
      .add(this.data.booking).then(docRef => {
      this.router.navigate(['confirmation-page', docRef.id]);
    })
  }

}
