import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';

function MovieList(props) {
    const movies = props.movies;
    const listMovies = movies.map((movie) =>
        <li>{movie.title}</li>
    );
    return (
        <ul>{listMovies}</ul>
    )
}


export default MovieList;