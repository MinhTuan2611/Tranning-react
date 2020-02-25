import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'
class TaskControl extends Component {
  render() {
    return (
      <div className="row mt-15">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Search />
        </div>

        <Sort />
      </div>
    );
  }
}

export default TaskControl;