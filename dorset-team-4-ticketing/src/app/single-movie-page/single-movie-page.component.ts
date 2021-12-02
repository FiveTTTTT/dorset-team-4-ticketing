import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-single-movie-page',
  templateUrl: './single-movie-page.component.html',
  styleUrls: ['./single-movie-page.component.scss'],
})
export class SingleMoviePageComponent implements OnInit {
  router: any;
  private sub: any;

  constructor(private route: ActivatedRoute,) {

  }

  name: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    console.log(this.name);

  }


}
