import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
private apiKey: 'cda8706f0655ce98b223dc86723adca1';
private baseUri: 'https://api.themoviedb.org/3';
private imagesUri: 'http://image.tmdb.org/t/p/';

  constructor(private http: HttpClient ) {
  }

  getMovie(id: string ) {
    const url = `${this.baseUri}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
