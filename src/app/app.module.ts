import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListScreenComponent } from './movie-list-screen/movie-list-screen.component';
import { MovieDetailScreenComponent } from './movie-detail-screen/movie-detail-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RootComponent } from './root/root.component';
import { BsNavComponent } from './bs-nav/bs-nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AllMoviesComponent } from './all-movies/all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListScreenComponent,
    MovieDetailScreenComponent,
    NotFoundComponent,
    RootComponent,
    BsNavComponent,
    HomeComponent,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
