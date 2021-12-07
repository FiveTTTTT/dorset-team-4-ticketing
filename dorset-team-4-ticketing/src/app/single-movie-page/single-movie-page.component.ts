import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-single-movie-page',
  templateUrl: './single-movie-page.component.html',
  styleUrls: ['./single-movie-page.component.scss'],
})
export class SingleMoviePageComponent implements OnInit {
  router: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private store: AngularFirestore) {

  }

  theMovie: any[] = [];
  name: any;
  theMovieInfo: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });

    this.store
      .collection("movies")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {

          this.theMovie.push(doc.data());

        });
        // console.log(this.myArray[0].title);
        this.findTheMovie(this.name);
        console.log(this.theMovieInfo.title);
      });

  }

  findTheMovie(nameOfMovie) {
    var isTheRightMovie = false;
    var n = -1;
    while (!isTheRightMovie && n <= this.theMovie.length) {
      // console.log(this.theMovie[0]);
      n++;
      // console.log(`length : ${this.theMovie.length}`);


      if (this.theMovie[n].title == nameOfMovie) {
        isTheRightMovie = true;
        this.theMovieInfo = this.theMovie[n];
      }
      // console.log(n);

    }


  }


}
