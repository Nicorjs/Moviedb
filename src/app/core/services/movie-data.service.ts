import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../../shared/dto/movie/movie.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
private apiKey = 'cda8706f0655ce98b223dc86723adca1';
private uri = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient ) {
  }

  getQuery(query: string, multiple: boolean = false) {
    if (!multiple) {
      const URL = `https://api.themoviedb.org/3/${ query }?api_key=${this.apiKey}`;
      return this.http.get(URL);
    }
    const url = `https://api.themoviedb.org/3/${ query }&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

// Obtiene Datos de una pelicula en particular
  getDatamovie(id: string ) {
    return this.getQuery(`movie/${id}`);
  }

  getDiscover() {
    return this.getQuery(`discover/movie`);
  }

}
