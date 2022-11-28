import React from 'react';

const MyProduct = ({ product, handleDeleteProduct }) => {
    const { product_name, price_origin, price_resale, condition } = product;

    return (
        <tr>
            <th><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-accent'>Delete</button></th>
            <td>{product_name}</td>
            <td>{price_origin}</td>
            <td>{price_resale}</td>
            <td>{condition}</td>
            {
                product?.status === "available" && <td>Advertise</td>
            }



        </tr>
    );
};

export default MyProduct;