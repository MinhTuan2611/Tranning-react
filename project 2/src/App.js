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
  saveTasks = (tasks) => {
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onSubmitForm = (data) => {
    let { tasks } = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.saveTasks(tasks);
  }

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    const index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.saveTasks(tasks);
    }
  }
  onDelete = (id) => {
    let { tasks } = this.state;
    const index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index,1);
      this.saveTasks(tasks);
      this.onToggleForm();
    }
  }
  findIndex = (id) => {
    const { tasks } = this.state;
    let result = -1
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
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
            <TaskControl />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;