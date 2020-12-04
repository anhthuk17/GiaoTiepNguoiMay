import React from 'react';
import Footer from './Footer';
import Header from './Header';

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
                      <button ><a href="/cardpay">Pay by Card</a>
                          </button>
                      <button><a href="/emailpay">Pay by Email</a>
                          </button>
 </div>            
 <div style={{position:"absolute",bottom:"0",width:"100%"}}> 
     <Footer/>
 </div>
 </div>
            
        )
    }
}
export default Pay;





