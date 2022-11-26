import React from 'react';
import BookingModalForm from './BookingModalForm';

const BookingModal = ({ products }) => {
    return (
        <div>
            {
                products.map(product => <BookingModalForm key={product._id} product={product}></BookingModalForm>)
            }

        </div>
    );
};

export default BookingModal;