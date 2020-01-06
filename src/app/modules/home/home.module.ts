import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './home.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { MovieComponent } from './pages/movie/movie.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    CardsComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ],
  exports:
  [
    HomeComponent,
  ]
})
export class HomeModule { }
