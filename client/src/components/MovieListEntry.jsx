import React from 'react';

var MovieListEntry = (props) => (
    <div className="movie-list-entry">
        <div>{props.title}</div>
    </div>
);

export default MovieListEntry;