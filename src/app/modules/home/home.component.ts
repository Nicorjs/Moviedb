import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../core/services/movie-data.service';
import { MoviesDto } from '../../shared/dto/movies/movies.dto';
import { MovieDto } from 'src/app/shared/dto/movie/movie.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos: MovieDto[];
  page: number;
  totalResults: number;
  totalPages: number;
  isloanding = true;


  constructor(public movies: MovieDataService) {
    movies.getDiscover().subscribe( (res: MoviesDto) => {
      this.isloanding  = false;
      this.page = res.page;
      this.totalPages  = res.total_pages;
      this.totalResults = res.total_results;
      this.datos = res.results;
    });
  }

  ngOnInit() {
  }

}
