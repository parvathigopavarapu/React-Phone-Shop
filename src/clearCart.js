import React from 'react'
import { ProductConsumer } from './Context';
import {Link} from 'react-router-dom';
import PaypalPayment from './PaypalPayment'
class ClearCart extends React.Component {
    render() {
        return (<React.Fragment>

            <ProductConsumer>
                {(value) => {
                    const {cartSubTotal,CartTax,CartTotal,clearCart} = value
                    if (value.cart.length) {
                        return (
                            <div className=' float-right '>
                                <div className='row'>
                                    <button className='btn btn-danger mr-5'
                                        onClick={() => { clearCart() }}>
                                       <Link to='/'>CLEAR CART</Link> </button></div>

                                <div className='row'>  
                                 <label className='float-right'>SUBTOTAL :
                        </label> <label>{cartSubTotal}</label></div>

                                <div className='row'>  
                                  <label className='float-right'>TAX : </label>
                        <label>{CartTax}</label></div>

                                <div className='row'>
                                    <label className='float-right'>TOTAL : </label>
                        <label>{CartTotal} </label></div>
                                {/* <div className='row'>
                                    <button className='btn btn-warning mr-5'>
                                        PAYPAL CHECKOUT</button></div> */}
                                        <PaypalPayment total={CartTotal}
                                        clearCart = {clearCart}
                                        
                                        ></PaypalPayment>
                            </div>
                        );
                    }
                }}
            </ProductConsumer>
        </React.Fragment>)
    }
}
export default ClearCart;