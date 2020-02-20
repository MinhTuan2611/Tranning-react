import React, { Component } from 'react';

class SizeSetting extends Component {
  render(){
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                Size: 12 px
                </h3>
            </div>
            <div className="panel-body">
                <button type="button" className="btn btn-success">Tăng</button>
                &nbsp;
                <button type="button" className="btn btn-success">Giảm</button>
            </div>
        </div>
    );
  }
}

export default SizeSetting;

