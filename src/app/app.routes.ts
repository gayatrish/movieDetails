
import { Routes } from "@angular/router";
import { MovieListScreenComponent } from './movie-list-screen/movie-list-screen.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailScreenComponent } from './movie-detail-screen/movie-detail-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes:Routes = [
  { path: '', component: HomeComponent },
  { path:'movieList', component:MovieListScreenComponent},
  { path: 'movieDetails', component:MovieDetailScreenComponent},
  { path: '**', component: NotFoundComponent }
];
