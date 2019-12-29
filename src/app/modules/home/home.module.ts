import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { AngularMaterialModule } from '../../core/angular-material.module';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    CardsComponent
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
