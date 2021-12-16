import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss'],
})
export class ConfirmationPageComponent implements OnInit {

  order_id: any;

  constructor(public data: DataService, private route: ActivatedRoute, private store: AngularFirestore) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.order_id = params['id'];
    });

  let order = this.store
    .collection("orders")
    .doc(this.order_id)
    .get()
    .subscribe(value => {
      this.updateOrder(value.data());
    })
  }

  updateOrder(order) {
    $("#order-id").text("#"+this.order_id);
    $("#order-fullName").text(order.customer.firstName + " " + order.customer.lastName);
    $("#order-email").text(order.customer.email);
    let seat_element = $("#order-seats");
    seat_element.html("");
    let seats_string = "";
    for(var i = 0; i < order.seats.length; i++) {
      let seat = order.seats[i];
      seats_string += seat.l + seat.n + " ";
    }
    seat_element.text(seats_string);
    $("#order-movieTitle").text(order.session.movieTitle);
    $("#order-date").text(order.session.date + " at " + order.session.time);

  }

}
