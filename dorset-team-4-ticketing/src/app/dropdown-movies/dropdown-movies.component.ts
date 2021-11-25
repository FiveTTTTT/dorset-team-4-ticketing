import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-movies',
  templateUrl: './dropdown-movies.component.html',
  styleUrls: ['./dropdown-movies.component.scss'],
})
export class DropdownMoviesComponent implements OnInit {

  userTags: any;

  constructor() { }

  ngOnInit() {
    this.userTags = 3;
    console.log(this.userTags);
  }

}
