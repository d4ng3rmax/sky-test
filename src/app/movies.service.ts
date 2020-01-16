import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  // moviesUrl = 'https://sky-frontend.herokuapp.com/movies';
  
  proxyUrl = '';
  moviesUrl = '../assets/movies.json';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<any[]>(`${this.proxyUrl}${this.moviesUrl}`);

    // const listMoviesObservable = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(this.http.get<any[]>(`${this.proxyUrl}${this.moviesUrl}`));
    //   }, 1000);
    // });

    // return listMoviesObservable;
  }
}
