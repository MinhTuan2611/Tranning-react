import React, { Component } from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import SizeSetting from './Components/SizeSetting';
import Reset from './Components/Reset';
import Result from './Components/Result'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color: 'red',
      fontSize: 15
    };
    this.onSetColor=this.onSetColor.bind(this);
  }
  onSetColor(params){
    this.setState({
      color : params,
    });
    
  }
  render(){
    return(
      <div className="container mt-50">
        <div className="row">

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker color={this.state.color}
              onReciveColor={this.onSetColor}
            />
          </div>
          
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">   
            <SizeSetting/>

            <Reset/>
          </div>
          
         <Result color={this.state.color}/>
          
        </div>
      </div>
    );
  }
}

export default App;

