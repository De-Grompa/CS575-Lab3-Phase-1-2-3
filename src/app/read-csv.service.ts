import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadCsvService {

  constructor(private http: HttpClient) { }
  getMovies(): Observable<Movie[]> {
    return this.http.get('assets/tmdb-movies.csv', { responseType: 'text' })
      .pipe(
        map(data => this.parseCsvData(data))
      );
  }

  private parseCsvData(data: string): Movie[] {
    const lines = data.split('\n');
    const headers = lines[0].split('~');
    const movies: Movie[] = [];

    for (let i = 1; i < lines.length; i++) {
      const movieData = lines[i].split('~');
      const movie: any = {};
      for (let j = 0; j < headers.length; j++) {
        movie[headers[j]] = movieData[j];
      }
      movies.push(movie);
    }
    return movies;
  }

  getMovieByID(id: number): Observable<Movie> {
    return this.getMovies().pipe(
      map(movies => movies[id])
    );
  }

  
}
