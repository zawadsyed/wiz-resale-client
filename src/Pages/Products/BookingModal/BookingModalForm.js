import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const BookingModalForm = ({ product }) => {
    const { product_name, price_resale } = product;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'You have booked the product successfully',
            timer: 1500
        })
        event.target.reset();
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='name' defaultValue={user?.displayName} disabled type="text" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input name='email' defaultValue={user?.email} disabled type="text" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input name='price' defaultValue={price_resale} disabled type="text" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input name='number' type="text" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input name='location' type="text" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <input className='btn btn-primary rounded-full capitalize text-lg px-6 w-full mt-4' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModalForm;