
import React from 'react';
import WatchButton from './WatchButton.jsx';

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
    if (props.search) {
        return (
            <ul>
            {props.searchedMovies.map((movie, i) => {
                return (
                    <Movie key={i} movie={movie}/>
                )
            })}
            </ul>
        );
    } else {
        return (
            <ul>
            {props.movies.map((movie, i) => {
                return (
                    <Movie key={i} movie={movie}/>
                )
            })}
            </ul>
        );
    }
}




class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            watched: this.props.movie.watched,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            watched: !this.state.watched
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <div>
                    <li>{this.props.movie.title}</li>
                    <button onClick={this.handleClick}>
                        <WatchButton watched={this.state.watched}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default MovieList;