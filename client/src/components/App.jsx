import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movies,
      filter: 'hello'
    };
  }

  handleInput(event) {
    console.log('input ', event.target.value);
    this.setState({
      filter: event.target.value
    })
    console.log('filter', this.state.filter);
  }
  // senses keystrokes but console.logs undefined???



  render() {
    return (
      <div>
      <div className="movietitle">Movie List</div>
        <nav className="navbar">
          <div>
            <Search handleInput={this.handleInput.bind(this)}/>
          </div>
        </nav>
          <MovieList movies={this.state.movies} filter={this.state.filter}/>
      </div>
    );
  }
};

export default App;