import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
                 <header>   
                    <nav className="navbar menu_top">
                        <div id="menu_top">
                            <ul>
                                <li>
                                    <a>Trang Chủ</a>                               
                                </li>
                                <li >
                                    <a>Giới thiệu</a>                               
                                </li>
                                <li >
                                    <a>Sản phẩm</a>                               
                                </li>

                                <li id="floatleft">
                                    <a className="nav-link dropdown-toggle waves-effect waves-light floatleft1" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                       Tài Khoản
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                        <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                                        <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                                        <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav> 
                 </header>
            
        );
    }
}

export default Header;