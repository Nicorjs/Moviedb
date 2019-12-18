import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private url = 'https://api.themoviedb.org/3/movie/550?api_key=cda8706f0655ce98b223dc86723adca1';
  constructor(private http: HttpClient) { 
  }

  getData() {
    this.http.get(this.url).subscribe( (data) => {
      console.log(data);
    } );
  }
}
