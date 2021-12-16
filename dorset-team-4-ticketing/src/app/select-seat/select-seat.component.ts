import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { DataService } from "../data.service";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.scss'],
})
export class SelectSeatComponent implements OnInit {

  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  rows = 10; //number of seat rows (26 max)

  movieSeats: any;
  nbMovies: any = 0;
  theMovie: any[] = ["1"];




  constructor(public data: DataService, private store: AngularFirestore) { }

  ngOnInit() {
    this.store
      .collection("movies")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {

          let theMovieS = [];
          theMovieS.push(doc.data());
          if (theMovieS[0].title == this.nbMovies.name) {
            this.theMovie.push(doc.data());
            this.movieSeats = theMovieS[0].date[0].hours[0].seats
            console.log(this.movieSeats);
          }

          // console.log(this.nbMovies.name);

        });
      });
  }



  counter(i: number) {
    return new Array(i);
  }

  alphabetToArray(): any[] {
    let array = [];
    for (let i = 0; i < this.rows; i++) {
      array.push(this.alphabet[i].toUpperCase());
    }
    return array;
  }

  addSeat(seat, event): void {

    let seat_element = $(event.target);
    let found = this.data.booking.seats.find(e => e.n === seat.n && e.l === seat.l);
    if (found) {
      //Seat already set
      seat_element.removeClass("selected");
      let i = this.data.booking.seats.indexOf(found);
      i === 0 ? this.data.booking.seats.splice(i, i + 1) : this.data.booking.seats.splice(i, i)
      return;
    }
    if (this.data.booking.seats.length >= (parseInt(String(this.data.booking.adults)) + parseInt(String(this.data.booking.childrens)))) return;
    //Seat not set
    this.data.booking.seats.push(seat);
    seat_element.addClass("selected");
  }

}
