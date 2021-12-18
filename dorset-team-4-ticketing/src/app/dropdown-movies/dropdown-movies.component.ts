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
  statusEvent: any;
  statusTime: any;

  dropEvent(n) {
    this.statusEvent = n.oneEvent;

  }
  dropTime(n) {
    this.statusTime = n.oneTime;
  }
  closeDrop() {
    this.statusEvent = null;
    this.statusTime = null;
  }

  adultMinusSeats() {
    if (this.numberAdultSeats > 0) {
      this.numberAdultSeats--;
      if (this.numberAdultSeats == 0) {
        this.numberChildSeats = 0
      }
    }
  }

  adultPlusSeats() {
    if (this.numberAdultSeats < 4) {
      this.numberAdultSeats++;

    }
  }

  childMinusSeats() {
    if (this.numberAdultSeats > 0) {
      if (this.numberChildSeats > 0) {
        this.numberChildSeats--;
      }
    }
  }

  childPlusSeats() {
    if (this.numberAdultSeats > 0) {
      if (this.numberChildSeats < 4) {
        this.numberChildSeats++;


      }
    }
  }

  ngOnInit() {
    this.allEvents = [1, 2];
    this.timeOfOneEvent = [1, 2];
    this.numberAdultSeats = 0;
    this.numberChildSeats = 0;
  }

}
