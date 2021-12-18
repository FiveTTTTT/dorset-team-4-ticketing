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

  movieSeats: any;

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
    this.data.booking.adults > 0 ? component.show() : component.hide();
  }

  findSeatsInDb(seats) {

    this.store
      .collection("movies")
      .doc("FourthMovie")
      .get()
      .subscribe((ss) => {


        this.movieSeats = ss.data()
        this.movieSeats = this.movieSeats.seats;

        seats.forEach(e => {
          let column = e.n.toString();
          let row = e.l;

          let n = 0;
          let seatExist = false;
          console.log(" this.movieSeats.length" + this.movieSeats.length);
          if (this.movieSeats[n].horizontal == column && this.movieSeats[n].vertical == row) {
            seatExist = true;
            this.movieSeats[n].isTaken = true;

          } else {
            while (n < this.movieSeats.length && this.movieSeats[n].horizontal != column || this.movieSeats[n].vertical != row) {
              n++;

              if (this.movieSeats[n].horizontal == column && this.movieSeats[n].vertical == row) {
                seatExist = true;
                this.movieSeats[n].isTaken = true;

              }
            }
          }
        })
        // this.updateSelectedSeats(this.movieSeats);

      });
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
