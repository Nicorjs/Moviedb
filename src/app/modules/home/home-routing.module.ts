import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './home.component';
import { MovieComponent } from './pages/movie/movie.component';


const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'movies', component: MoviesComponent },
        { path: 'movies/:id', component: MovieComponent },
        { path: '', pathMatch: 'full', redirectTo: 'index'}
    ],

  },
  {
    path: '**',
    redirectTo: 'index/movies'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
