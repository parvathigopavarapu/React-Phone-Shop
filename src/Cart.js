import React from 'react'
import { ProductConsumer } from './Context';
import ClearCart from './clearCart'

class Cart extends React.Component {
    render() {
        return (
            <React.Fragment>
            <table className='table'>
                    <thead >
                        <tr >
                            <th scope='col'>PRODUCTS</th>
                            <th scope='col'>NAME OF PRODUCTS</th>
                            <th scope='col'>PRICE</th>
                            <th scope='col'>QUANTITY</th>
                            <th scope='col'>REMOVE</th>
                            <th scope='col'>TOTAL</th>
                        </tr>
                    </thead>

            <ProductConsumer>
                
                    {(value) => (value.cart.length ? value.cart.map(product => {
                        const { img, title, price, total,count,id } = product;
                        return (
                            <tbody>
                                <tr key={product.id}>
                                    <td><img src={img} alt='product' className="img-fluid" /></td>
                                    <td>{title}</td>
                                    <td>{price}</td>
                                    <td><button onClick={() => value.decrementCount(id)}>-</button>
                                    <input type='number' readOnly value={count} className='countInput' />
                                    <button onClick={()=>{value.incrementCount(id)}}>+</button></td>
                                    <td><button onClick={() => value.removeFromCart(id)} >Remove</button></td>
                                    <td>{total}</td>
                                </tr>
                            </tbody>


                        );
                    }) : null


                    )}
               
            </ProductConsumer>
            </table>
            <ClearCart />
            </React.Fragment>
        );

    }
}
export default Cart;