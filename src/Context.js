import React from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();
class ProductProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            productDetails: detailProduct,
            cart: [],
            modalOpen: false,
            modalDetail: detailProduct,
            cartSubTotal:0,
            CartTax:0,
            CartTotal:0
        };
    }
    componentDidMount() {
        this.setProducts()
    }
    openModel = (id) => {
        const product = this.getProduct(id)
        this.setState({ modalDetail: product, modalOpen: true })

    }
    closeModel = () => {
        this.setState({ modalOpen: false })

    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => {
            return { productList: tempProducts }
        })
    }
    getProduct = (id) => {
        const product = this.state.productList.find(item => item.id === id)
        return product;
    }
    handleDetail = (id) => {
        const product = this.getProduct(id);
        this.setState(() => { return { productDetails: product } })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.productList]
        const product = tempProducts.find(item => item.id === id)
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { productList: tempProducts, cart: [...this.state.cart, product] }
        }, () => {
            this.subTotal()
        })
    }
    removeFromCart = (id) => {
        let tempProducts = [...this.state.cart]
        const product = tempProducts.find(item => item.id === id)
        product.inCart = false;
        product.count = 0;
        const products = tempProducts.filter(product => product.id !== id)
        this.setState(() => {
            return { cart: products }
        },()=>{this.subTotal()})
    }

    incrementCount = (id) => {
        let tempProducts = [...this.state.cart]
        const product = tempProducts.find(item => item.id === id)
        product.count = product.count + 1;
        const price = product.price;
        product.total = product.price * product.count;
        this.setState(() => {
            return { cart: tempProducts }
        }, () => {
            this.subTotal()
        })


    }
    decrementCount = (id) => {
        let tempProducts = [...this.state.cart]
        const product = tempProducts.find(item => item.id === id)
        if (product.count > 1) {
            product.count = product.count - 1;
            const price = product.price;
            product.total = product.price * product.count;
            this.setState(() => {
                return { cart: tempProducts }
            }, () => {
                this.subTotal()
            })
        }

    }
    clearCart =() =>{
        // this.setState({cart:[]})
        this.setState(()=>{
            return {cart:[]};
        },()=>{
            this.setProducts();
        })
    }
    subTotal = () =>{
        let subTotal=0;
        let tempProducts = [...this.state.cart]
        tempProducts.map(product =>{
            subTotal = subTotal+product.total;
        })
        const tax = parseFloat((subTotal * 0.1).toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {cartSubTotal:subTotal,
                    CartTax:tax,
                    CartTotal:total}
        })

    }

    render() {
        return <ProductContext.Provider
            value={{
                ...this.state,
                addToCart: this.addToCart,
                handleDetail: this.handleDetail,
                openModel: this.openModel,
                closeModel: this.closeModel,
                removeFromCart: this.removeFromCart,
                incrementCount: this.incrementCount,
                decrementCount:this.decrementCount,
                clearCart:this.clearCart,
            }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider }