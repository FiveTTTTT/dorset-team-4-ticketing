import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor(private store: AngularFirestore) { }

  newMovies: any;
  trendingMovies: any;
  familyMovies: any;

  myArray: any[] = [];
  newArrayany: any[] = [];

  ngOnInit() {
    // this.newMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // this.trendingMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // this.familyMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // this.getAll();
    // this.newArrayany = [0, 2, 3]

    this.store
      .collection("movies")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          console.log("hello");

          this.myArray.push(doc.data());

        });
        // console.log(this.myArray[0].title);
      });

    // console.log(this.newArrayany);
  }

  // createArray() {
  //   var n = 0;
  //   var m = 0;

  //   var x = 0;
  //   var lol = [];
  //   var alphaB = [
  //     "A",
  //     "B",
  //     "C",
  //     "D",
  //     "E",
  //     "F",
  //     "G",
  //     "H",
  //     "I",
  //     "J",
  //   ];

  //   while (n <= 99) {


  //     var mdr = {
  //       horizontal: (m + 1).toString(),
  //       vertical: alphaB[x],
  //       isTaken: false,
  //     }
  //     n++;
  //     m++;
  //     lol.push(mdr);
  //     console.log(n);

  //     if (n % 10 == 0) {
  //       x++;
  //       m = 0;

  //     }


  //   }
  //   console.log(lol);
  // }
}

