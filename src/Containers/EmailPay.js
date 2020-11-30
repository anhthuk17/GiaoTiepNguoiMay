import React from 'react';

class EmailPay extends React.Component {
    render() {
        return (
        
            <div className="container">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h2 className="text-center">Pay by Email </h2>
              </div>
              <div className="panel-body">
                
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input required="true" type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input required="true" type="password" className="form-control" id="pwd" />
                </div>
                
                {/* <button className="btn btn-success">Register</button> */}

                <button
                              className="btn btn-success"
                >
      
                              EmailPay
                </button>

              </div>
            </div>
          </div>
            
        )
    }
}
export default EmailPay;

