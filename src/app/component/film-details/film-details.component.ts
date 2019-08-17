import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: any;
  filmID: string;

  constructor(private active: ActivatedRoute, private router: Router, private constant: Constant) { }


  ngOnInit() {
    this.active.params
      .subscribe(
        (params: Params) => {
          this.filmID = params['filmId'];
        }
      )

  }

}
