import React from 'react'
import ProductList from './ProductList'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import LoginModel from './LoginModel';
import { Modal,Button } from 'react-bootstrap'
import LoginModel from './LoginModel';
import SignupModel from './SignupModel';

class NavLinks extends React.Component {
    constructor(props){
        super(props)
        this.state={
            login:false,
            Signup:false
        }
        this.OpenModel = this.OpenModel.bind(this)
    }
    OpenModel=()=>{
        this.setState({ login:true})
    }

    render() {
    let addLoginClose = () =>this.setState({login:false})
    let addSignupClose = () =>this.setState({Signup:false})

        return (
            <div>
                <nav className="navbar 
                navbar-expand-sm bg-success
                 navbar-dark px-sm-5 navbar-fixed">
                  
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                               <Link to='/Home' >Home</Link></li>

                               <li className="nav-item ml-5">
                               <Link to='/Orders' >Orders</Link></li>

                               <li className="nav-item ml-5">
                               <Link to='/About' >About</Link></li>

                               <li className="nav-item ml-5">
                               <Link to='/Contactus' >Contact US</Link></li>
                               <li className="nav-item ml-5">
                               <Link to='/Cart' >  <FontAwesomeIcon icon={faShoppingCart} className='ml-auto '/></Link></li>
                           </ul>
                           <div className="md-form ml-5">
                           <input className="form-control" type="text"
                            placeholder="Search" aria-label="Search" />
                            </div>


                          <div className='ml-auto '>
                              <Button variant="contained" color="primary"
                               onClick={this.OpenModel}>Login</Button>
                              <Button variant="contained" color="secondary"
                               onClick={this.opensignupModel = ()=>
                               {this.setState({Signup:true})}}>Signup</Button>

                              </div>
                   
                </nav>
                <LoginModel show={this.state.login}
                close={addLoginClose} />
                 <SignupModel show={this.state.Signup}
                close={addSignupClose} />
               
               </div>
        );

    }
}
export default NavLinks