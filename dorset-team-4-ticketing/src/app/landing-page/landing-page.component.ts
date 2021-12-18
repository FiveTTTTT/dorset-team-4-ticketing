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

    this.store
      .collection("movies")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.myArray.push(doc.data());

        });
      });
  }
}

