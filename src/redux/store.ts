import {makeAutoObservable, remove} from 'mobx';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function createMovieStore() {
  return makeAutoObservable({
    selectedMovie: [] as Movie[],

    addMovie(movie: Movie) {
    const isMovieInList = this.selectedMovie.some(m => m.imdbID === movie.imdbID);
    
    if (!isMovieInList) {
      this.selectedMovie.push(movie);
    }
  },

    removeMovie(imdbID: string) {
      this.selectedMovie = this.selectedMovie.filter(
        movie => movie.imdbID !== imdbID,
      );
    },
  });
}

const movieStore = createMovieStore();
export default movieStore;
