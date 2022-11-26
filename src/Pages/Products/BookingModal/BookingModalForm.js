import React from 'react';
import PrimaryButton from '../../../Shared/Button/PrimaryButton/PrimaryButton';

const BookingModalForm = ({ product }) => {
    const { product_name, condition, location, price_origin, price_resale, yearsUsed, date, sellerName, img } = product;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form>
                        <input type="text" placeholder="Type here" className="input input-bordered mt-4 w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered mt-4 w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered mt-4 w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered mt-4 w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered mt-4 w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered mt-4 w-full" />
                        <input className='btn btn-primary rounded-full capitalize text-lg px-6 w-full mt-4' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModalForm;