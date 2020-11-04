import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleChange(event) {
    this.setState ({
      value: event.target.value
    })
  };

  handleSubmit(event) {
    this.props.getQuery(this.state.value);
    this.props.isSearching();
    event.preventDefault();
  }

  handleHome(event) {
    console.log('home');
    this.props.goHome();
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <input placeholder="Search..." type="text" value={this.state.value} onChange={this.handleChange} />
          <form className='watch' onSubmit={this.handleSubmit} >
            <input className='watch' type="submit" value="Go!" />  
          </form>
          <form className='watch' onSubmit={this.handleHome}>
            <input className='watch' type="submit" value="Home" />
          </form>
      </div>
    );
  }
}

export default Search;