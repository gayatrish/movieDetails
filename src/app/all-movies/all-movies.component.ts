import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  list:Array<Movie>;
  selectedMovie:Movie;
  constructor(private mService:MovieService) { }

  ngOnInit() {
    this.list = this.mService
  }

}
constructor(private aService: AuthorService) { }

    ngOnInit() {
        this.list = this.aService.Authors;
    }

    selectAuthor(a: Author) {
        this.aService.SelectedAuthor = a;
        this.selectedAuthor = this.aService.SelectedAuthor;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
