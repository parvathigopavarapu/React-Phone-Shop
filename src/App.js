import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavLinks from './NavLinks';
import { Route,Switch } from 'react-router-dom'
import ProductList from './ProductList';
import Detail from './Detail';
import About from './About';
import Contactus from './Contactus';
import Orders from './Orders';
import Cart from './Cart';
import CartModel from './Model';
import Default from './Default';


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <NavLinks />
      <Switch>
        <Route path='/' exact strict component={ProductList} />
        <Route path='/Cart' exact strict component={Cart} />
        <Route path='/Orders' exact strict component={Orders} />
        <Route path='/About' exact strict component={About} />
        <Route path='/Contactus' exact strict component={Contactus} />
        <Route path='/ProductDetails/:id' exact strict component={Detail} />
        <Route component={Default}/>
        </Switch>
        <CartModel/>
   
      </div>
    );
  }
}

export default App;
