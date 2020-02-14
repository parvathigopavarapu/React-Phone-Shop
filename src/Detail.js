import React from 'react'
import { ProductProvider, ProductConsumer } from './Context'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // const product;
        return <div className='App'>
            <ProductConsumer>
                {(value) => {
                const {id,company,img,info,price,title,inCart} = value.productDetails;
                  return   (
                        <div className='card col-9 mx-auto col-md-6 col-lg-6 my-2'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='img-container'>
                                        <img src={`../${img}`} alt='product' className='card-img-top' />
                                    </div>
                                    <h6>{company}</h6>
                                    <p>{title}</p>
                                    <h6>Price: &#x20b9;{price}</h6>

                                </div>
                                <div className='col-6'>
                                    <p>{info}</p>

                                </div>
                            </div>

                            <button className="btn btn-primary"><Link to='/' >Back To Products</Link></button>

                            <button disabled={inCart ? true : false} className="btn btn-warning"
                                onClick={() => { value.addToCart(id) ;value.openModel(id)}}>
                                {inCart ? 'in Cart' : 'Add to Cart'}
                            </button>

                        </div>

                    )
                }
                }
            </ProductConsumer>


        </div>
    }
}
Detail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};
export default Detail