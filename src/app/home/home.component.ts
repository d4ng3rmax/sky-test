import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Array<any>;

  groupArr = this.movies.reduce((r, { group }) => {
    if (!r.some(o => o.group == group)) {
      r.push({ group, groupItem: this.movies.filter(v => v.group == group) });
    }
    return r;
  }, []);



  // filterBy = 

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.listMovies();
  }

  listMovies() {
    this.movieService.listMoviesService().subscribe(res => this.movies = res);
  }

}
