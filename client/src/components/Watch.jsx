import React from 'react';

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: 'all'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(event.target.value);
        this.props.setSelectedMovies(event.target.value);
    }

    render() {
        return (
            <div>
                <button className="watch" onClick={this.handleClick} value="all">All</button>
                <button className="watch" onClick={this.handleClick} value="watched">Watched</button>
                <button className="watch" onClick={this.handleClick} value="not watched">Not Watched</button>
            </div>
        )
    }
}

export default Watch;