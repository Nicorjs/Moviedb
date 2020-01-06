import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MoviesComponent } from './modules/home/pages/movies/movies.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'index',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index/movies'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'index/movies'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
