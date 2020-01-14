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

    // categories
    // https://stackoverflow.com/questions/49915051/angular-ngfor-create-table-with-group-item

    var groupArr = this.movies.reduce((r, { categories }) => {
      if (!r.some(o => o.group == categories)) {
        r.push({ categories, categoriesItem: this.movies.filter(v => v.categories == categories) });
      }
      return r;
    }, []);
  }

  listMovies() {
    this.movieService.listMoviesService().subscribe(res => this.movies = res);
  }

}
