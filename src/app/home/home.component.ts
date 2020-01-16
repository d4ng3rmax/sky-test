import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any;
  catalog: Array<any>;
  finalContent: Array<any>;
  outFilter: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.listMovies();
  }
  
  listMovies() {
    // this.movieService.getMovies().subscribe(res => this.movies = res);
    
    this.movieService.getMovies().subscribe(
      res => {
        if (res) {
          this.outFilter = this.funcFilter(res, "carousel-portrait");
          this.movies = this.organizar( this.outFilter );
          console.log( this.movies );
        } else {
          // data not found
        }
      },
      error => {
        console.log('ERROR: ', error);
      }
    );
    
  }

  funcFilter( objMovie: any, prop ) {
      let arrFinal = [];
      objMovie.map((element, index) => {
        
        arrFinal[element.type] = ( typeof arrFinal[element.type] != 'undefined' && arrFinal[element.type] instanceof Array ) ? arrFinal[element.type] : []
        arrFinal[element.type].push(element.movies);
        
      });
      
      // console.log(arrFinal[prop][0]);
      return arrFinal[prop][0];
  }

  organizar = (lista: { reduce: (arg0: (prev: any, item: any) => any, arg1: {}) => void; }) =>
    lista.reduce((prev, item) => {
          const letter = this.cleanString(item.categories.toLowerCase().split(',')[0]);
          if (prev[letter]) {
            prev[letter].push(item);
          } else {
            item.categoryListName = item.categories.split(',')[0];
            prev[letter] = [item];
          }
          return prev;
      }, {});

  cleanString (str) {
    var map = {
        '-' : ' ',
        '' 	: 'ˆ|`|\'|´|:',
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };
    
    str = str.toLowerCase();
    
    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
  };


}
