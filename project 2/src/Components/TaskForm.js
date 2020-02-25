import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(value);
    
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Them Cong Viec
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Ten:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Trang Thai:</label>
            <select
              name="status"
              className="form-control"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={0}>An</option>
              <option value={1}>Kich Hoat</option>
            </select>
            <br />
            <button type="submit" className="btn btn-warning">
              <span className="fa fa-plus text-left mr-5"></span>
              Luu lai</button>

            <button
              type="reset"
              className="btn btn-danger text-right"
              onClick={this.onCloseForm}
            >
              <span className="fa fa-times text-left mr-5"></span>
              Huy bo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;