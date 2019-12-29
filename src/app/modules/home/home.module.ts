import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsComponent
  ],
  exports:
  [
    HomeComponent,
  ]
})
export class HomeModule { }
