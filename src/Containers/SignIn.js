import React from 'react';
import Footer from './Footer';
import Header from './Header';

class SignIn extends React.Component {
    render() {
        return (
        // <form className="form-signin">
        //         <h2 className="form-signin-heading"> Please sign in </h2>
        //         <label for="inputEmail" className="sr-only"> Email address
        //         </label>
        //         <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        //         <label for="inputPassword" className="sr-only"> Password</label>
        //         <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        //         <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
        //         </button>
        //     </form>
        <div className="view-container">
                <div >
                    <Header/>
                </div>
        <div className="container">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h2 className="text-center">Registation </h2>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="usr">Name:</label>
                    <input required="true" type="text" className="form-control" id="usr" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input required="true" type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input required="true" type="password" className="form-control" id="pwd" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmation_pwd">Confirmation Password:</label>
                    <input required="true" type="password" className="form-control" id="confirmation_pwd" />
                  </div>
                  {/* <button className="btn btn-success">Register</button> */}

                  <button
                                className="btn btn-success"
                  >
        
                                <a href="/pay">Register</a>
                  </button>

                </div>
              </div>
            </div>
            <div >
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default SignIn;

