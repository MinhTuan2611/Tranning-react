import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskControl from './Components/TaskControl';
import TaskList from './Components/TaskList';

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className="text-center">
          <h1>Quan Ly Cong Viec</h1>
          <hr/>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskForm/>
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus text-left mr-5"></span>
              Them cong viec
            </button>
            <TaskControl/>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;































