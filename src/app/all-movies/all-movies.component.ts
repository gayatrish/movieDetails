import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  list:Array<Movie>;
  selectedMovie:Movie;
  constructor() { }

  ngOnInit() {
  }

}
