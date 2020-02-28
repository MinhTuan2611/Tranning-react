import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  onUpdateStatus = (id) => {
    this.props.onUpdateStatus(id);
  }
  onDelete = (id) => {
    this.props.onDelete(id);
  }
  onUpdate=(id)=>{
    this.props.onUpdate(id);
  }
  render() {
    const { tasks } = this.props;
    const elmTasks = tasks.map((task, index) => {
      return <TaskItem
        key={task.id}
        index={index}
        task={task}
        onUpdateStatus={this.onUpdateStatus}
        onDelete={this.onDelete}
        onUpdate={this.onUpdate}
      />
    });

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Trang thai</th>
            <th>Hanh Dong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td><input type="text" className="form-control" /></td>
            <td>
              <select name="status" className="form-control">
                <option value={2}>Tat ca</option>
                <option value={0}>An</option>
                <option value={1}>Kich Hoat</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;