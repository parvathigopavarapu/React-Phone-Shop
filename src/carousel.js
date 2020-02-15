import React from 'react';
import { ProductConsumer } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

class Carousel extends React.Component {
  data = [1, 2, 3, 4, 5, 6, 7, 8]
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }
  gotoPreviousSlide = () => {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 })
    } else if (this.state.activeIndex == 0) {
      this.setState({ activeIndex: this.data.length - 1 })
    }
  }
  moveToNextSlide = () => {
    if (this.state.activeIndex < this.data.length - 1) {
      this.setState({ activeIndex: this.state.activeIndex + 1 })
    } else if (this.state.activeIndex < this.data.length) {
      this.setState({ activeIndex: 0 })
    }
  }
  render() {
    return (
      <div className="row bg-secondary1 text-black">
        <div className='col-1'>

          <FontAwesomeIcon icon={faArrowCircleLeft} className='fa-3x pad'
            onClick={this.gotoPreviousSlide} />
        </div>
        <div className='col-8'>
          <ProductConsumer>
            {(value) => (value.productList.map((product, index) => (
              <div className={
                index === this.state.activeIndex ? 'active row' : 'inactive'}
                key={product.title}>
                <div className=' col-6'>
                  <div >
                    <img src={product.img} alt='product image' />
                  </div>

                </div>
                <div className='col-6'>
                  <h1>{product.company}</h1>
                  <h2>{product.title}</h2>
                  <h3>Price: &#x20b9;{product.price}</h3>
                  <p>{product.info}</p>

                </div>
              </div>
            )))}
          </ProductConsumer>
        </div>
        <div className='col-1'>
          <FontAwesomeIcon icon={faArrowCircleRight} className='fa-3x pad'
            onClick={this.moveToNextSlide} />
        </div>

      </div>
    );
  }
}

export default Carousel;
