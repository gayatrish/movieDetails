import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import{AppRoutingModule, routingComponents} from './app-routing-module';
import { AllMoviesComponent } from './all-movies/all-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
