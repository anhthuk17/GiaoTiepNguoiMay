import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Link} from 'react-router';
class Pay extends React.Component {
    render() {
        return (
        
        // <div className="container">
        //       <div className="panel panel-primary">
        //         <div className="panel-heading">
        //           <h2 className="text-center">Pay by Email</h2>
        //         </div>
        //           <div className="form-group">
        //             <label htmlFor="email">Email:</label>
        //             <input required="true" type="email" className="form-control" id="email" />
        //           </div>
        //           <div className="form-group">
        //             <label htmlFor="pwd">Password:</label>
        //             <input required="true" type="password" className="form-control" id="pwd" />
        //           </div>
                  
        //           <button
        //                         className="btn btn-success"
        //           >Pay
        //           </button>

        //         </div>
        //       </div>
        
        <div className='view-container'>
                 <div >
                    <Header/>
                </div>
                <div style={{marginTop:"40px"}}>
                   

                    <h2>Payment Methods</h2>
                      {/* <button ><a href="/cardpay">Pay by Card</a>
                          </button> */}
                          <Link className="btn btn-success" to="/cardpay">
                                 <span>Pay by Card</span>
                        </Link>
                        <Link className="btn btn-danger" to="/emailpay">
                                 <span>Pay by Email</span>
                        </Link>
                </div>   
                         
                 <div  style={{position:"fixed",bottom:"0",width:"100%"}}> 
                    <Footer/>
                </div>
        </div>
            
        )
    }
}
export default Pay;





