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
  theTab: any[] = [
    {
      "horizontal": "1",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "A",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "B",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "C",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "D",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "E",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "F",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "G",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "H",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "I",
      "isTaken": false
    },
    {
      "horizontal": "1",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "2",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "3",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "4",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "5",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "6",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "7",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "8",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "9",
      "vertical": "J",
      "isTaken": false
    },
    {
      "horizontal": "10",
      "vertical": "J",
      "isTaken": false
    }
  ];


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

      });

    // this.updateMovies(this.theTab)
  }

  // updateMovies(n) {
  //   this.store
  //     .collection("movies")
  //     .doc("FourthMovie")
  //     .update({
  //       date: [
  //         {
  //           day: "4/03/23", hours: [
  //             {hour: "8am", seats: n },
  //            {hour:  "9am", seats: n },
  //             {hour: "10pm", seats: n }
  //           ]
  //         },
  //         {
  //           day: "5/03/23", hours: [
  //             {hour: "8am", seats: n },
  //            {hour:  "9am", seats: n },
  //             {hour: "10pm", seats: n }
  //           ]
  //         }
  //       ]
  //     })
  // }

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


}
