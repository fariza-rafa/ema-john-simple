import React from 'react';

const Product = (props) => {
    console.log(props.product.name);
    return (
        <div>
            <h3>This is product</h3>
        </div>
    );
};

export default Product;