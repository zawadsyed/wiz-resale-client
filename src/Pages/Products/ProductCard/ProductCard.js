import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import PrimaryButton from '../../../Shared/Button/PrimaryButton/PrimaryButton';

const ProductCard = ({ product }) => {
    const { product_name, condition, location, price_origin, price_resale, yearsUsed, date, seller_name, img } = product;
    const handleBooking = () => {

    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_name}
                    <div className="badge badge-secondary">{condition}</div>
                </h2>
                <p className='flex gap-2 justify-center items-center'><HiLocationMarker></HiLocationMarker> {location}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Original Price: {price_origin}</div>
                    <div className="badge badge-outline font-semibold text-success">Resale Price: {price_resale}</div>
                </div>
                <div className="">Used: {yearsUsed} Year</div>
                <div className="">Posted Date: {date}</div>
                <div className="">Seller Name: {seller_name}</div>
                <label htmlFor="booking-modal" className="btn btn-primary rounded-full capitalize text-lg px-6">Book Product</label>
            </div>
        </div>
    );
};

export default ProductCard;