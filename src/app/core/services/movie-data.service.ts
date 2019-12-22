import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private apiKey: 'cda8706f0655ce98b223dc86723adca1';
  private baseUri: 'https://api.themoviedb.org/3/movie/550?api_key=';
  private imagesUri: 'http://image.tmdb.org/t/p/';

  constructor(private http: HttpClient) {
  }

  getData() {
    this.http.get(this.baseUri + this.apiKey).subscribe( (data) => {
      console.log(data);
    } );
  }
}
