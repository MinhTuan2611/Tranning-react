import React, { Component } from 'react';

class Search extends Component {
  render(){
    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search"/>
            <span className="input-group-btn">
            <button type="button" className="btn btn-primary">
                <span className="fas fa-search text-left mr-5"></span>
                Tim
            </button>
            </span>
        </div>  
    );
  }
}

export default Search;