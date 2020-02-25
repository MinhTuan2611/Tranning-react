import React, { Component } from 'react';

class TaskControl extends Component {
    render() {
        return (
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

        );
    }
}

export default TaskControl;