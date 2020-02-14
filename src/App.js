import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavLinks from './NavLinks';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductList from './ProductList';
import Product from './Product';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <NavLinks />
          <Route path='/' exact strict component={ProductList}/>
           <Route path='/productDetails:id' exact strict component={Product}/>
       </Router>
      </div>
    );
  }
}

export default App;
