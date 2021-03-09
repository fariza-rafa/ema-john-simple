import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
            </div>
            <br />
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - Order soon</small></p>
        </div>
    );
};

export default Product;