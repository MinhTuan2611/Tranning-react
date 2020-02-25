import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskControl from './Components/TaskControl';
import TaskList from './Components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }
  onGenerateData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: 'Hoc Lap Trinh',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Di boi',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Ngu',
        status: false
      }
    ]
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + this.s4();
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }

  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  onSubmitForm = (data) => {
    const tasks = {
      id: this.generateID(),
      name: data.name,
      status: data.status
    }
    console.log(tasks);
    
  }
  render() {
    const { tasks, isDisplayForm } = this.state;
    const elmTaskForm = isDisplayForm ? (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <TaskForm
          onCloseForm={this.onToggleForm}
          onSubmitForm={this.onSubmitForm}
        />
      </div>) : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quan Ly Cong Viec</h1>
          <hr />
        </div>
        <div className="row">
          {elmTaskForm}
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus text-left mr-5"></span>
              Them cong viec
            </button>
            <button type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus text-left mr-5"></span>
              Genergate Data
            </button>
            <TaskControl />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;