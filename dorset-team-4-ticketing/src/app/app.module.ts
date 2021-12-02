import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectSeatComponent } from "./select-seat/select-seat.component";
import { DropdownMoviesComponent } from './dropdown-movies/dropdown-movies.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import {BookingComponent} from "./booking/booking.component";


@NgModule({
  declarations: [AppComponent, SelectSeatComponent, DropdownMoviesComponent, ConfirmationPageComponent, LandingPageComponent, SingleMoviePageComponent, BookingComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
