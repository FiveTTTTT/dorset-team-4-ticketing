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
    this.newMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.trendingMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.familyMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // this.getAll();
    this.newArrayany = [0, 2, 3]


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

}
