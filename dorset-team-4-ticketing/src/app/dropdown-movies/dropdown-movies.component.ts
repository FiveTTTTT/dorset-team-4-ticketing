import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-movies',
  templateUrl: './dropdown-movies.component.html',
  styleUrls: ['./dropdown-movies.component.scss'],
})
export class DropdownMoviesComponent implements OnInit {

  allEvents: any;
  timeOfOneEvent: any;
  numberAdultSeats: any;
  numberChildSeats: any;


  constructor() { }

  adultMinusSeats() {
    if (this.numberAdultSeats > 0) {
      this.numberAdultSeats--;
      if (this.numberAdultSeats == 0) {
        this.numberChildSeats = 0
      }
    }
    console.log();
  }

  adultPlusSeats() {
    if (this.numberAdultSeats < 4) {
      this.numberAdultSeats++;

    }
    console.log();
  }

  childMinusSeats() {
    if (this.numberAdultSeats > 0) {
      if (this.numberChildSeats > 0) {
        this.numberChildSeats--;
      }
      console.log();

    }
  }

  childPlusSeats() {
    if (this.numberAdultSeats > 0) {
      if (this.numberChildSeats < 4) {
        this.numberChildSeats++;

      }

    }
    console.log();
  }

  // childMinusSeats(seats) {
  //   if (this.numberAdultSeats > 0) {
  //     this.minusSeats(seats);
  //   }
  // }

  ngOnInit() {
    this.allEvents = [1];
    this.timeOfOneEvent = [1];
    this.numberAdultSeats = 0;
    this.numberChildSeats = 0;

    // console.log(this.allEvents);
  }

}
