import { Component, OnInit, Input } from '@angular/core';
import { MovieDto } from '../../dto/movie/movie.dto';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items: MovieDto[];
  private imagesUri = 'http://image.tmdb.org/t/p/w500';



  constructor() { }

  ngOnInit() {
  }

  getimage(image: string) {
    return `${this.imagesUri}${image}`;
  }

}
