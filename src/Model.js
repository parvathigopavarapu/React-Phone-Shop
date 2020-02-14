import React from 'react'
import { ProductConsumer } from './Context';
import styled from 'styled-components';
import {Link}from 'react-router-dom'
class CartModal extends React.Component {
    render() {
        return (<ProductConsumer>
            {value => {
                const { modalOpen, closeModel } = value;
                const { img, title, price } = value.modalDetail;
                if (!modalOpen) {
                    return null;
                } else {
                    return <Modal>
                        <div className='container'>
                            <div className='row'>
                                <div id='CartModal' className=' mx-auto'>
                                    <h4 className='mt-5'> Item Added to the cart</h4>
                                    <img src={img} alt='product' />
                                    <h3>{title}</h3>
                                    <h6>Price: &#x20b9;{price}</h6>
                                
                            <Link to='/'>   <button className='btn btn-danger mb-5'
                             onClick={()=> closeModel()}>Continue Shopping</button></Link> 
                            <Link to='/Cart'>  <button className='btn btn-warning mb-5 ml-2'
                             onClick={()=> closeModel()}>Goto cart</button></Link>
                                </div>

                            </div>

                        </div>

                    </Modal>

                }
            }}
        </ProductConsumer>)
    }
}
const Modal = styled.div`
position:fixed;
color:black;
top:0;
left:0;
right:0;
botton:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
height:100%;
padding:0px;
#CartModal{
    background:white;
}`;
export default CartModal;