import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
  
        <footer className="page-footer font-small mdb-color bgColor">
          <div className="container text-center text-md-left">
            <div className="row">
            <div className="col-md-2 col-lg-4 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">can you take care</h5>


                <ul id="fixNav1">
                <li><a>Iphone</a></li>
                <li><a>SamSung</a></li>
                <li><a>Galaxy</a></li>
                <li><a>Nokia</a></li>
              </ul>
              </div>
              <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <a href="#!">ABOUT US</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">BLOG</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-home mr-3" /> Tòa nhà SmartBuilding Đà Nẵng</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope mr-3" /> smartphone@gmail.com</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
                <p>
                <a type="button" className="btn-floating btn-fb">
                  <i className="fab fa-facebook-f" /> Facebook
                  <p></p>
                </a>
                <a type="button" className="btn-floating btn-tw">
                  <i className="fab fa-twitter"/> Twitter
                  <p></p>
                </a>
                <a type="button" className="btn-floating btn-gplus">
                  <i className="	fab fa-google-plus-square" /> Google
                  <p></p>
                </a>
                <a type="button" className="btn-floating btn-gplus">
                  <i className="	fab fa-instagram" /> Instagram
                  <p></p>
                </a>
                <a type="button" className="btn-floating btn-gplus">
                  <i className="	fab fa-youtube-square" /> Youtube
                  <p></p>
                </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">SmartPhone chất lượng: 
            <a href="https://mdbootstrap.com/"> Contact Us</a>
          </div>
      
      </footer>
      );
    }
  }

  export default Footer;