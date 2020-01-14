import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Array<any>;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.listMovies();
  }

  listMovies() {
    this.movieService.listMoviesService().subscribe(res => this.movies = res);
  }

}
