import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../core/services/movie-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public movies: MovieDataService) { 
    movies.getMovie('550').subscribe( (res) => console.log(res) );
  }

  ngOnInit() {
  }

}
