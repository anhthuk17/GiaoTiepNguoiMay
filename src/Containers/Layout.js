import React from 'react';
import CenterImag from './CenterImag';
import Footer from './Footer';
import Header from './Header1';
import {SideBar} from './SideBar';


const Layout = ({children})=>{
    return (

        <div className="view-container">
            <Header/>
            <div>
                <CenterImag/>
            </div>

            <div className="container margintop">   
                <div className="row">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>
                    <div className="col-md-9">
                        {children}
                    </div>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
};

export default Layout;