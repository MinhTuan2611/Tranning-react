import React, { Component } from 'react';

class TaskForm extends Component {
  render(){
    return(
    <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Them Cong Viec   
            <span className="fa fa-times-circle text-right"></span>
          </h3>
        </div>
        <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Ten:</label>
            <input type="text" className="form-control"/>
          </div>
          <label>Trang Thai:</label>
          <select name="status" className="form-control">
          <option value={0}>An</option>
          <option value={1}>Kich Hoat</option>
        </select>
          <br/>
          <button type="submit" className="btn btn-warning">
            <span className="fa fa-plus text-left mr-5"></span>
            Luu lai</button>

            <button type="reset" className="btn btn-danger text-right">
            <span className="fa fa-times text-left mr-5"></span>
            Huy bo</button>
        </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;