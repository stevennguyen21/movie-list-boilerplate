import React from 'react';


class AddMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.getInput = this.getInput.bind(this); 
        this.submit = this.submit.bind(this);
    }

    getInput(event) {
        this.setState({
            value: event.target.value
        });
    }

    submit(event) {
        this.props.addMovie({
            title: this.state.value,
            watched: false
        })
        console.log('value inside submit ', this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <input placeholder="Add new movie..." type="text" value={this.state.value} onChange={this.getInput}/>
                    <input type="submit" value="Add" />
                </div>
            </form>
        )
    }
}

export default AddMovies;