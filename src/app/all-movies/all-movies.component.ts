import { Component, OnInit } from '@angular/core';
import {ApiMovieFetchService} from './api-movie-fetch.service';
import{Versions} from '../shared/user.model'
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movie_type;
  names;
  overview;
  title;
  popularity;
  vote_count;
  vender;
  idAttr;
  constructor(private apiService: ApiMovieFetchService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.movie_type = data['genres'];
    });
  }
  onGoToPage2(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr= event.currentTarget.name;
    console.log(idAttr);
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.movie_type = data['genres'];
    });
    this.apiService.getMoviesbyID(idAttr).subscribe((data)=>{
      console.log(data);
      this.names = data['id'];
      this.vender=data['results'];
      for(var i=0; i < this.vender.length;i++)
      {
        console.log(data['results']); 
        
      }
      // console.log(data['page']);
      // console.log(data['results']);
      // var json = JSON.parse(data['results']);
      // console.log(json);
      this.idAttr=null; 
    }); 
   }
}
