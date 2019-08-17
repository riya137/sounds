import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { SliderComponent } from './component/slider/slider.component';
import { FilmComponent } from './component/film/film.component';
import { Constant } from './shared/constant';
import { FilmDetailsComponent } from './component/film-details/film-details.component';
import { SongPlayComponent } from './component/song-play/song-play.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    SliderComponent,
    FilmComponent,
    FilmDetailsComponent,
    SongPlayComponent,
    LoadingSpinnerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
