import React from 'react'
import ProductList from './ProductList'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class NavLinks extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar 
                navbar-expand-sm bg-success
                 navbar-dark px-sm-5 navbar-fixed">
                   <Link to='/'>
                   <FontAwesomeIcon icon={faShoppingCart} />
                   </Link>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                               <Link to='/' >Products</Link></li>
                           </ul>
                           <div class="md-form mt-0">
                           <input class="form-control" type="text"
                            placeholder="Search" aria-label="Search" />
                            </div>
                            

                          <div className='ml-auto '>
                              <button className='button'>Login</button>
                              <button>Signup</button>
                              </div>
                           {/* <Link to='/cart' className='ml-auto'> <FontAwesomeIcon icon={faShoppingCart} /></Link> */}
                   
                </nav>
                <footer>@copy rights are reserved</footer>
               </div>
        );

    }
}
export default NavLinks