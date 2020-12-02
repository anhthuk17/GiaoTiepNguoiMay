import React from 'react';
import Footer from './Footer';
import Header from './Header';


class CardPay extends React.Component {
  
    render() {
        return (
          <div className="view-container">
            <div>
              <Header/>
            </div>
          <div className="container">
            
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2 className="text-center">Pay by Card </h2>
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label htmlFor="nameCard">Name on Card:</label>
                <input required="true" type="text" className="form-control" id="nameCard" />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input required="true" type="numbers" className="form-control" id="cardNumber" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Exp Date:</label>
                <input required="true" type="date" className="form-control" id="date" />
              </div>
              <div className="form-group">
                <label htmlFor="csc">CSC:</label>
                <input required="true" type="numbers" className="form-control" id="csc" />
              </div>
              {/* <button className="btn btn-success">Register</button> */}

              <button
                            className="btn btn-success"
              >
    
                            CardPay
              </button>

            </div>
          </div>
          
        </div>
        <div>
              <Footer/>
            </div>
        </div>
        

    )
    }
}
export default CardPay;