import React, { Component } from 'react';

class TaskItem extends Component {
  render(){
    return(
        <tr>
                    <td className="text-center">1</td>
                    <td>Lap trinh ReactJS</td>
                    <td className="text-center">
                    <span className="label label-info">An</span>
                    </td>
                    <td className="text-center"> 
                        <button className="btn btn-warning">
                            <span className="fa fa-pen mr-5"></span>
                            Sua
                        </button>
                        &nbsp;
                        <button className="btn btn-danger">
                            <span className="fa fa-trash-alt mr-5"></span>
                            Xoa
                        </button>
                    </td>
                </tr>
    );
  }
}

export default TaskItem;