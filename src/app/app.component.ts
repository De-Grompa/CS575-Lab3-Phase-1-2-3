import { Component } from '@angular/core';
import { ReadCsvService } from './read-csv.service';
import { Movie } from './movie.model';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS575-Project2-Phase1 - Movie Filter';
  movies!: Movie[];
  showFilters = false;
  showGenreFilter = false;
  showCompanyFilter = false;
  showYearFilter = false;
  showRatingFilter = false;
  showRevenueFilter = false;
  showRuntimeFilter = false;
  showVoteCountFilter = false;
  showVoteAverageFilter = false;
  showPopularityFilter = false;

  showUsers = false;

  titleSearch = '';
  genreSearch = '';
  companySearch = '';
  yearSearch = '';
  ratingSearch = '';
  revenueSearch = '';
  runtimeSearch = '';
  voteCountSearch = '';
  voteAverageSearch = '';
  popularitySearch = '';


  // Start showUsers
  toggleUsers() {
    this.showUsers = !this.showUsers;
    let users = this.users;
    console.log(users);
  }
  // End showUsers


  get users(): any[] {
    return this.inMemoryDataService.users;
  }

  // Start search by title
  get filteredMoviesByTitle(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie => 
      movie.original_title && 
      movie.original_title.toLowerCase().includes(this.titleSearch.toLowerCase())
    );
  }
  // End search by title

  // Start filter by genre
  get filteredMoviesByGenre(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.genres && movie.genres.some(genre => genre.toLowerCase().includes(this.genreSearch.toLowerCase()))
    );
  }
  // End filter by genre

  // Start filter by company
  get filteredMoviesByCompany(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.production_companies && movie.production_companies.some(company => company.toLowerCase().includes(this.companySearch.toLowerCase()))
    );
  }
  // End filter by company

  // Start filter by year
  get filteredMoviesByYear(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.release_year && movie.release_year.toString() === this.yearSearch
    );
  }
  // End filter by year

  // Start filter by numerical rating
  get filteredMoviesByRating(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.vote_average && movie.vote_average.toString() === this.ratingSearch
    );
  }
  // End filter by numerical rating

  // Start filter by revenue
  get filteredMoviesByRevenue(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.revenue && movie.revenue.toString() === this.revenueSearch
    );
  }
  // End filter by revenue

  // Start filter by runtime
  get filteredMoviesByRuntime(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.runtime && movie.runtime.toString() === this.runtimeSearch
    );
  }
  // End filter by runtime

  // Start filter by vote count
  get filteredMoviesByVoteCount(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.vote_count && movie.vote_count.toString() === this.voteCountSearch
    );
  }
  // End filter by vote count

  // Start filter by vote average
  get filteredMoviesByVoteAverage(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.vote_average && movie.vote_average.toString() === this.voteAverageSearch
    );
  }
  // End filter by vote average

  // Start filter by popularity
  get filteredMoviesByPopularity(): Movie[] {
    if (!this.movies) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.popularity && movie.popularity.toString() === this.popularitySearch
    );
  }
  // End filter by popularity

  constructor(private readCsvService: ReadCsvService, private inMemoryDataService: InMemoryDataService) {}

  ngOnInit(): void {
    this.readCsvService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.readCsvService.getMovieByID(1).subscribe(movie => {
        console.log(movie);
      });
    });
  }
  sortingOptions = ['id', 'popularity (increasing)', 'popularity (decreasing)',
    'budget (increasing)', 'budget (decreasing)', 'revenue (increasing)',
    'revenue (decreasing)', 'alphabetical (a-z)', 'alphabetical (z-a)',
    'release year (increasing)', 'release year (decreasing)'];

  currentSortingIndex = 0;
  currentSorting = this.sortingOptions[this.currentSortingIndex];

  cycleSorting(): void {
    this.currentSortingIndex = (this.currentSortingIndex + 1) % this.sortingOptions.length;
    this.currentSorting = this.sortingOptions[this.currentSortingIndex];
    this.sortMovies();
  }



  sortMovies(): void {
    let sortedMovies!: Movie[];
    switch (this.currentSorting) {
      case 'id':
        sortedMovies = this.movies.sort((a, b) => a.id - b.id);
        break;
      case 'popularity (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'popularity (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'budget (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.budget - b.budget);
        break;
      case 'budget (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.budget - a.budget);
        break;
      case 'revenue (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.revenue - b.revenue);
        break;
      case 'revenue (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.revenue - a.revenue);
        break;
      case 'alphabetical (a-z)':
        sortedMovies = this.movies.sort((a, b) => a.original_title.localeCompare(b.original_title));
        break;
      case 'alphabetical (z-a)':
        sortedMovies = this.movies.sort((a, b) => b.original_title.localeCompare(a.original_title));
        break;
      case 'release year (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.release_year - b.release_year);
        break;
      case 'release year (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.release_year - a.release_year);
        break;
    }
    this.movies = sortedMovies;
  }
}
