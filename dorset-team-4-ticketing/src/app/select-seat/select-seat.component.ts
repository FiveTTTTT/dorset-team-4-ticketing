import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.scss'],
})
export class SelectSeatComponent implements OnInit {

  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  rows = 10; //number of seat rows (26 max)
  max_selection = 3; //Max seat selection

  selectedSeats = [];

  constructor() { }

  ngOnInit() {}

  counter(i: number) {
    return new Array(i);
  }

  alphabetToArray() : any[] {
    let array = [];
    for(let i = 0; i<this.rows; i++) {
      array.push(this.alphabet[i].toUpperCase());
    }
    return array;
  }

  addSeat(seat, event) : void {
    let seat_element = $(event.target);
    let found = this.selectedSeats.find(e => e.n === seat.n && e.l === seat.l);
    if (found) {
      //Seat already set
      seat_element.removeClass("selected");
      let i = this.selectedSeats.indexOf(found);
      i === 0 ? this.selectedSeats.splice(i, i + 1) : this.selectedSeats.splice(i, i)
      return;
    }
    if(this.selectedSeats.length >= this.max_selection) return;
    //Seat not set
    this.selectedSeats.push(seat);
    seat_element.addClass("selected");
  }

}
