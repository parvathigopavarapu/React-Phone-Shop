import React from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
class ProductProvider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            productList:storeProducts,
            productDetails:detailProduct
        }
    }
    render() {
        return <ProductContext.Provider 
        value={{...this.state}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider}