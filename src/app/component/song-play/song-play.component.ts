import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-song-play',
  templateUrl: './song-play.component.html',
  styleUrls: ['./song-play.component.css']
})
export class SongPlayComponent implements OnInit {

  songID: string;
  filmID: string;

  constructor(private active: ActivatedRoute, private router: Router, private constant: Constant) { }


  ngOnInit() {
    this.active.params
      .subscribe(
        (params: Params) => {
          this.songID = params['songId'];
          //this.filmID = params[':filmId']
        }
      )
      this.active.parent.url.subscribe((urlPath) => {
        this.filmID = urlPath[urlPath.length - 1].path;
        console.log(this.filmID);
    })

  }

}
