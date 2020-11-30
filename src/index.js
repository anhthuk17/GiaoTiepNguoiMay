import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {browserHistory,Router,Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Layout from './Containers/Layout';
import Phones from './Containers/Phones';
import Phone from './Containers/Phone';
import Basket from './Containers/Basket';
import SignIn from './Containers/SignIn';
import Pay from './Containers/Pay';
import EmailPay from './Containers/EmailPay';
import CardPay from './Containers/CardPay';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
const jsx = (
    <Provider store={store}>
       <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones}></Route>
                <Route path='/categories/:id' component={Phones} />
                
            </Route>
            <Route path="/Phones/:id" component={Phone} />
            <Route path="/basket" component={Basket} />
            <Route path="/signin" component={SignIn} />
            <Route path="/pay" component={Pay}/>
            <Route path="/emailpay" component={EmailPay}/>
            <Route path="/cardpay" component={CardPay}/>
            
       </Router>
    </Provider>
);




ReactDOM.render(jsx,document.getElementById('root'));

