import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
  
        <nav id="fixNav">
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Sản phầm</a></li>
            <li><a href="#">Giúp đỡ</a></li>
            <li>
              <a href="#">Khác</a>
              <ul className="sub-menu">
                <li><a href="#">Chat</a></li>
                <li><a href="#">Liên hệ qua SĐT</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      );
    }
  };

  export default Header;