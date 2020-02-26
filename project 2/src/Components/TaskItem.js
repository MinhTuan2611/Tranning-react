import React, { Component } from 'react';

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete=()=>{
    this.props.onDelete(this.props.task.id);
  }
  render() {
    const { task, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={task.status ? 'label label-danger' : 'label label-success'}
            onClick={this.onUpdateStatus}
          >{task.status ? 'Kich hoat' : 'An'}</span>
        </td>
        <td className="text-center">
          <button className="btn btn-warning">
            <span className="fa fa-pen mr-5"></span>
            Sua
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={this.onDelete}>
            <span className="fa fa-trash-alt mr-5"></span>
            Xoa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;