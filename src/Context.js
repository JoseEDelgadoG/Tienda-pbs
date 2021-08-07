import React, { Component } from "react";
import { storeProducts, detailProduct } from "./Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = ()=>{
        console.log("hello details")
    }
    addToCart = ()=>{
        console.log("hello addtocart")
    }
    render () {
        return (
            <ProductContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            handleDetail: this.addToCart

            }}>
            {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
