import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  router: any;

  constructor(public data: DataService, private store: AngularFirestore) { }

  movieSeats: any;


  ngOnInit() {
    this.toggleSeats();
  }

  toggleSeats(): void {
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
        this.updateSelectedSeats(this.movieSeats);

      });
  }

  updateSelectedSeats(n) {
    this.store
      .collection("movies")
      .doc("FourthMovie")
      .update({
        seats: n
      })
  }

}
