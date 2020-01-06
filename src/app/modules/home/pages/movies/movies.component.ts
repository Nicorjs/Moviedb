import { Component, OnInit, NgModule } from '@angular/core';
import { MovieDto } from 'src/app/shared/dto/movie/movie.dto';
import { MovieDataService } from 'src/app/core/services/movie-data.service';
import { MoviesDto } from 'src/app/shared/dto/movies/movies.dto';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
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
