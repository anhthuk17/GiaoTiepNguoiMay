import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {SideBar} from './SideBar';


const Layout = ({children})=>{
    return (

        <div className="view-container">
                <div >
                    <Header/>
                </div>


            <div className="container">   
                <div className="row">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>
                    <div className="col-md-9">
                        {children}
                    </div>
                </div>
            </div>
            <div >
                <Footer/>
            </div>
            
        </div>
    )
};

export default Layout;