import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {DataService} from "../data.service";


@Component({
  selector: 'app-single-movie-page',
  templateUrl: './single-movie-page.component.html',
  styleUrls: ['./single-movie-page.component.scss'],
})
export class SingleMoviePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: AngularFirestore, public data: DataService, public router: Router) {

  }

  theMovie: any[] = [];
  name: any;
  theMovieInfo: any;


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.theMovieInfo = {};

    this.store
      .collection("movies")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {

          this.theMovie.push(doc.data());

        });

        this.findTheMovie(this.name);
        // console.log(this.theMovieInfo);

      });

  }

  findTheMovie(nameOfMovie) {
    var isTheRightMovie = false;
    var n = -1;
    while (!isTheRightMovie && n < this.theMovie.length - 1) {
      n++;
      console.log(n);
      console.log(this.theMovie.length);
      console.log(n < this.theMovie.length);

      if (this.theMovie[n].title == nameOfMovie) {
        isTheRightMovie = true;
        this.theMovieInfo = this.theMovie[n];
      }
      // console.log(n);

    }


  }

  bookMovie(event) {
    let movieTitle = event.target.dataset.movietitle;
    let date = event.target.dataset.date;
    let time = event.target.dataset.time;
    this.data.booking.session = {
      movieTitle: movieTitle,
      date: date,
      time: time
    }
    this.router.navigate(['booking']);
  }

}
