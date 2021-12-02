import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }
  newMovies: any;
  trendingMovies: any;
  familyMovies: any;


  ngOnInit() {
    this.newMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.trendingMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.familyMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  }

}
