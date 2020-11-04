import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovies from './Addmovies.jsx';
import Watch from './Watch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchedMovies: [],
      searching: false,
      selected: 'all'
    };
    this.getQuery = this.getQuery.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.isSearching = this.isSearching.bind(this);
    this.goHome = this.goHome.bind(this);
    this.setSelectedMovies = this.setSelectedMovies.bind(this);
  }

  setSelectedMovies(filter) {
    this.setState({
      selected: filter
    })
  }

  getQuery(query) {
    var newMovies = [];
    console.log(query);
    for (var i = 0; i < this.state.movies.length; i++) {
      var movie = this.state.movies[i].title.toLowerCase();
      var newQuery = query.toLowerCase();
      if (movie.includes(newQuery)) {
        newMovies.push(this.state.movies[i]);
      }
    }
    console.log(this.state.movies);
    this.setState({
      searchedMovies: newMovies
    })
  }
  // updates state but the bullet list is empty

  isSearching(event) {
    this.setState({
      searching: true
    })
  }

  goHome() {
    this.setState({
      searching: false
    })
  }

  addMovie(movie) {
    var newMovies = this.state.movies;
    newMovies.push(movie);
    this.setState({
      movies: newMovies
    })
  }

  render() {
    return (
      <div>
      <div className="movietitle">Movie List</div>
        <nav className="navbar">
          <AddMovies addMovie={this.addMovie}/>
        </nav>
        <nav className="navbar">
          <div>
            <Search getQuery={this.getQuery} isSearching={this.isSearching} goHome={this.goHome}/>
          </div>
        <div>
          <Watch setSelectedMovies={this.setSelectedMovies}/>
        </div>
        </nav>
          <MovieList movies={this.state.movies} searchedMovies={this.state.searchedMovies} search={this.state.searching} filter={this.state.selected}/>
      </div>
    );
  }
};

export default App;