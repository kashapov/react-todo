import React, { Component } from "react";

import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {
  state = {
    filter: "all"
  };

  onFilterBtn = (filter) => {
    
    this.setState({
      filter
    });

    this.props.onFilter(filter);

    console.log(filter);
  };

  // btns val arr

  // make map btns

  render() {   

    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info"
          onClick={()=>this.onFilterBtn('all')}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={()=>this.onFilterBtn('active')}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={()=>this.onFilterBtn('done')}
        >
          Done
        </button>
      </div>
    );
  }
}
