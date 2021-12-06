import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectSeatComponent } from "./select-seat/select-seat.component";
import { DropdownMoviesComponent } from './dropdown-movies/dropdown-movies.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import { BookingComponent } from "./booking/booking.component";
import { ConfirmationPageComponent } from "./confirmation-page/confirmation-page.component";

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@NgModule({
  declarations: [AppComponent, SelectSeatComponent, ConfirmationPageComponent, DropdownMoviesComponent, LandingPageComponent, SingleMoviePageComponent, BookingComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule, RouterModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDkDX4Q7Bpov4OrnRCUVEyBxzXBWhlyWcs",
      authDomain: "dorset-team-4-ticketing-71ecb.firebaseapp.com",
      projectId: "dorset-team-4-ticketing-71ecb",
      storageBucket: "dorset-team-4-ticketing-71ecb.appspot.com",
      messagingSenderId: "876950338998",
      appId: "1:876950338998:web:a1f45935b73a388fc39517",
      measurementId: "G-KGCXL4V1RD"
    }),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
