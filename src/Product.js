import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ProductConsumer } from './Context'

class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { id, img, title, price, inCart, info, company } = this.props.product
        return (<React.Fragment >
            <div className=' mx-auto col-md-6 col-lg-3 col-sm-12 my-2'>
                <div className='card'>
                    <ProductConsumer>
                        {value => (
                            <div onClick={() => value.handleDetail(id)}>
                                <div className='img-container'>
                                    <img src={img} alt='product'
                                        className='card-img-top' />
                                </div>
                                <h6>{company}</h6>
                                <p>{title} </p>
                                <h6>Price: &#x20b9;{price}</h6>
                                <div> <Link to={`/ProductDetails/${id}`} >more...</Link>
                                    <button disabled={inCart ? true : false}
                                        className='cart'
                                        onClick={() => { value.addToCart(id);
                                        value.openModel(id) }}>
                                        {inCart ?
                                            (<p>in Cart</p>) :
                                            <FontAwesomeIcon icon={faShoppingCart} className='ml-auto ' />}
                                    </button>
                                </div>
                            </div>
                        )}
                    </ProductConsumer>
                </div>
            </div>

        </React.Fragment>);
    }
}
export default Product;