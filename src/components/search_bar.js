import React , {Component} from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};
  }
  render() {
    return (
      <div>
        <input className="search-bar"
        value = {this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(this.state.term)
  }
}


export default SearchBar;
