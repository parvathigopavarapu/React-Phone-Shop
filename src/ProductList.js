import React from 'react'
import { ProductConsumer } from './Context'
import Product from './Product';
import Carousel from './carousel';


class ProductList extends React.Component {
    constructor(props){
        super(props)
       
    }
    render() {
        return <React.Fragment>
             <Carousel />
            <div className='row ml-3  mr-3'>
                <ProductConsumer>
                    {(value) => (
                        value.productList.map(product => (
                            <Product key={product.id} product={product}></Product>
                        )))

                    }
                </ProductConsumer>
            </div>

        </React.Fragment>
    }
}
export default ProductList