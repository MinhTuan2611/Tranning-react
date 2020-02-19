import React from 'react';

class Header extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">Bài 2: Component</a>
                        <ul className="nav navbar-nav">
                            <li >
                                <a>Trang chủ</a>
                            </li>
                            <li className="active">
                                <a>Danh mục sản phẩm</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
