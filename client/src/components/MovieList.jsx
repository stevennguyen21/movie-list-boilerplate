
import React from 'react';


// var MovieList = (props) => {
//     if (props.search) {
//         return (
//             <ul>
//             {props.searchedMovies.map((movie, i) => {
//                 return (
//                     <Movie key={i} movie={movie}/>
//                 )
//             })}
//             </ul>
//         );
//     } else {
//         return (
//             <ul>
//             {props.movies.map((movie, i) => {
//                 return (
//                     <Movie key={i} movie={movie}/>
//                 )
//             })}
//             </ul>
//         );
//     }
// }

var MovieList = (props) => {
    if (props.filter === 'watched') {
        if (props.search) {
            return (
                <ul>
                {props.searchedMovies.map((movie, i) => {
                    if (movie.watched) {
                        return (
                            <Movie key={i} movie={movie} changeWatchState={props.changeWatchState}/>
                        )
                    }
                })}
                </ul>
            );
        } else {
            return (
                <ul>
                {props.movies.map((movie, i) => {
                    if (movie.watched) {
                        return (
                            <Movie key={i} movie={movie} changeWatchState={props.changeWatchState}/>
                        )
                    }
                })}
                </ul>
            );
        }
    } else if (props.filter === 'not watched') {
        if (props.search) {
            return (
                <ul>
                {props.searchedMovies.map((movie, i) => {
                    if (!movie.watched) {
                        return (
                            <Movie key={i} movie={movie} changeWatchState={props.changeWatchState}/>
                        )
                    }
                })}
                </ul>
            );
        } else {
            return (
                <ul>
                {props.movies.map((movie, i) => {
                    if (!movie.watched) {
                        return (
                            <Movie key={i} movie={movie} changeWatchState={props.changeWatchState}/>
                        )
                    }
                })}
                </ul>
            );
        }        
    }
    if (props.search) {
        return (
            <ul>
            {props.searchedMovies.map((movie, i) => {
                return (
                    <Movie key={i} movie={movie} changeWatchState={props.changeWatchState}/>
                )
            })}
            </ul>
        );
    } else {
        return (
            <ul>
            {props.movies.map((movie, i) => {
                return (
                    <Movie key={i} movie={movie} changeWatchState={props.changeWatchState}/>
                )
            })}
            </ul>
        );
    }
}




var Movie = (props) => {
    if (props.movie.watched) {
        return (
            <div>
                <div>
                    <li>{props.movie.title}</li>
                    <button onClick={() => {props.changeWatchState(props.movie)}}>
                        Watched
                    </button>
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <div>
                    <li>{props.movie.title}</li>
                    <button onClick={() => {props.changeWatchState(props.movie)}}>
                        Not Watched
                    </button>
                </div>
            </div>
        )
    }
}

export default MovieList;