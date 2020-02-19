import React, { Component } from 'react';
import './App.css';

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
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus text-left mr-5"></span>
              Them cong viec
            </button>
            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">
                      <span className="fas fa-search text-left mr-5"></span>
                      Tim
                    </button>
                  </span>
                </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button 
                    className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                      Sap xep
                      <span className="far fa-caret-square-down ml-5"></span>
                    </button>
                    <ul 
                      className="dropdown-menu" 
                      aria-labelledby="dropdownMenu1"
                    >
                      <li>
                        <a role="button" className="sort_selected">
                          <span className="fa fa-sort-alpha-down pr-5"> Ten A-Z</span>
                        </a>
                      </li>
                      <li>
                        <a role="button">
                          <span className="fa fa-sort-alpha-down-alt pr-5"> Ten Z-A</span>
                        </a>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <a role="button">
                          Trang thai kich hoat
                        </a>
                      </li>
                      <li>
                        <a role="button">
                         Trang thai an
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;































