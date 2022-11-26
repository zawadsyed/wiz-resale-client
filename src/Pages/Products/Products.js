import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div>
            <h1>Products</h1>
            <div className='max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <BookingModal products={products}></BookingModal>
        </div>

    );
};

export default Products;