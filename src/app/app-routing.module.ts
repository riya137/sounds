import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SliderComponent } from './component/slider/slider.component';
import { SignupComponent } from './component/signup/signup.component';
import { FilmComponent } from './component/film/film.component';
import { FilmDetailsComponent } from './component/film-details/film-details.component';
import { SongPlayComponent } from './component/song-play/song-play.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path: 'film', component: FilmComponent, children: [
    {
      path: ':filmId', component: FilmDetailsComponent, children: [
        { path: ':songId', component: SongPlayComponent }
      ]
    }
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
