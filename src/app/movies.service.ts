import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  moviesUrl = 'https://sky-frontend.herokuapp.com/movies';

  constructor(private http: HttpClient) { }

  listMoviesService() {
    return this.http.get<any[]>(`${this.proxyUrl}${this.moviesUrl}`);
  }
}
