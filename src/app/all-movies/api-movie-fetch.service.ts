import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieFetchService {
    API_KEY = '68e82445c8842ba8616d0f6bf0e97a41';
    movie_by_id="https://api.themoviedb.org/3/genre/";
  constructor(private httpClient: HttpClient) {
  }
  public getNews(){
    // return this.httpClient.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}`);

  }
  public getMoviesbyID(id :any){
    this.movie_by_id="https://api.themoviedb.org/3/genre/";
    this.movie_by_id=this.movie_by_id+""+id+"/movies";
    return this.httpClient.get(this.movie_by_id+`?api_key=${this.API_KEY}`);
  }
}
