import React, { Component } from 'react';

class TaskList extends Component {
  render(){
    return(
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
                    <td><input type="text" className="form-control"/></td>
                    <td>
                    <select name="status" className="form-control">
                        <option value={2}>Tat ca</option>
                        <option value={0}>An</option>
                        <option value={1}>Kich Hoat</option>
                    </select>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
  }
}

export default TaskList;































