import {makeAutoObservable, remove} from 'mobx';
import Toast from 'react-native-toast-message';

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
      const isMovieInList = this.selectedMovie.some(
        m => m.imdbID === movie.imdbID,
      );

      if (!isMovieInList) {
        this.selectedMovie.push(movie);
        Toast.show({
          type: 'success',
          text1: 'Movie Added',
          text2: `${movie.Title} added to the list`,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Movie Already Added',
          text2: `${movie.Title} is already in the list`,
        });
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
