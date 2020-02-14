import React from 'react'
import { ProductConsumer } from './Context'
import Product from './Product'
import { Link } from 'react-router-dom'

class ProductList extends React.Component {
    render() {
        return <React.Fragment>
            <div className='row ml-5  mr-5'>
                <ProductConsumer>
                {(value) => (
                    value.productList.map(product => (
                        <div className='col-6 mx-auto col-md-6 col-lg-3 my-2'> 
                            <div className='card'>
                                <div className='img-container'>
                                    <img src={product.img} alt='product' className='card-img-top' />
                                </div>
                                <h6>{product.company}</h6>
                                <p>{product.title}</p>
                                <h6>Price: &#x20b9;{product.price}</h6>
                                <Link to ={`/ProductDetails/${product.id}`} >more...</Link>
                            </div>
                          
                        </div>
                    )))

                } 
                </ProductConsumer>
            </div>

        </React.Fragment>
    }
}
export default ProductList