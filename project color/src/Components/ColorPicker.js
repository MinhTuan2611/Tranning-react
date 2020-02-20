import React, { Component } from 'react';

class ColorPicker extends Component {
  render(){
    return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                <span id="actve"></span>
                </div>
            </div>
    );
  }
}

export default ColorPicker;

