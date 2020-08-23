import { Movie } from '../model/movie.model';
import { Subject, Observable } from 'rxjs';

export class MovieService{
  private list:Array<Movie>;
  private sMovie:Movie;
  private mServiceSubject:Subject<any>;
  seectedMovieChanged: Observable<any>;
  constructor(){
    console.log('movie service is created');

    // this.mServiceSubject = 
  }



}
