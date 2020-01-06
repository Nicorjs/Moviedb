import { Component, OnInit, ElementRef} from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../../../../core/services/movie-data.service';
import { MovieDto } from '../../../../shared/dto/movie/movie.dto';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  movie: MovieDto;
  loadingData = true;
  background: string;
  panelOpenState : boolean;
  private imagesUri = 'http://image.tmdb.org/t/p';

  constructor( private router: ActivatedRoute,
               private movieServices: MovieDataService,
               private elementRef: ElementRef ) {
      this.router.params.subscribe( params => {
        this.getdataMovie(params.id);
      });
    }

    ngOnInit() {
    }

    getdataMovie(id: string) {
    this.movieServices.getDatamovie( id ).subscribe( (res: MovieDto) => {
      this.movie = res;
      this.background = res.backdrop_path;
      this.loadingData = false;
      // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = this.getBackground();

    });
  }
  getimage(image: string, tam: string = 'w500') {
    return `${this.imagesUri}/${tam}${image}`;
  }

}

