import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies = [{ title: 'Spiderman: No Way Home', genre: 'Action' }];

  // Our service logic here
  getFilteredMovies(genre: string) {
    return this.movies.filter((movie) => movie.genre === genre);
  }
}

