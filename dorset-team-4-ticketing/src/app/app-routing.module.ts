import { NgModule } from '@angular/core';
import { DropdownMoviesComponent } from "./dropdown-movies/dropdown-movies.component";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';

const routes: Routes = [
  {
    path: '', component: DropdownMoviesComponent

  }, {
    path: 'confimation-page', component: ConfirmationPageComponent

  },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
