import React from 'react';

var WatchButton = (props) => {
    if (props.watched) {
        return (
            <div>Watched</div>
        )
    } else {
        return (
            <div>Not Watched</div>
        )
    }
}

export default WatchButton;
