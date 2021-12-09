import { NgModule } from '@angular/core';
import { DropdownMoviesComponent } from "./dropdown-movies/dropdown-movies.component";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import {BookingComponent} from "./booking/booking.component";

const routes: Routes = [
  {
    path: '', component: LandingPageComponent

  },
  {
    path: 'booking', component: BookingComponent

  },
  {
    path: 'confirmation-page', component: ConfirmationPageComponent

  },
  {
    path: 'dropdown-page', component: DropdownMoviesComponent

  },
  {
    path: 'single-movie-page/:name', component: SingleMoviePageComponent

  },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
