import React from 'react'
import { ProductConsumer } from './Context';
import {Link} from 'react-router-dom'
class ClearCart extends React.Component {
    render() {
        return (<React.Fragment>

            <ProductConsumer>
                {(value) => {
                    if (value.cart.length) {
                        return (
                            <div className=' float-right '>
                                <div className='row'>
                                    <button className='btn btn-danger mr-5'
                                        onClick={() => { value.clearCart() }}>
                                       <Link to='/Home'>CLEAR CART</Link> </button></div>

                                <div className='row'>  
                                 <label className='float-right'>SUBTOTAL :
                        </label> <label>{value.cartSubTotal}</label></div>

                                <div className='row'>  
                                  <label className='float-right'>TAX : </label>
                        <label>{value.CartTax}</label></div>

                                <div className='row'>
                                    <label className='float-right'>TOTAL : </label>
                        <label>{value.CartTotal}</label></div>
                                <div className='row'>
                                    <button className='btn btn-warning mr-5'>
                                        PAYPAL CHECKOUT</button></div>
                            </div>
                        );
                    }
                }}
            </ProductConsumer>
        </React.Fragment>)
    }
}
export default ClearCart;