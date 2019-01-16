import React, { Component } from "react";

import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    search: ""
  };

  onSearchChange = e => {
    const search = e.target.value;

    this.setState({
      search
    });

    this.props.onSearch(search);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.search}
      />
    );
  }
}
