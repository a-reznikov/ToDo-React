import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: '',
  }

  onSearchItems = (e) => {
    const term = e.target.value;
    this.setState({
      term: term,
    });
    this.props.showSearchItems(term);
  }

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchItems}
        value={this.state.term} />
    );
  }
};
