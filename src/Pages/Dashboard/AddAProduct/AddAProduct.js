import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get('http://localhost:5000/categorytitle')
            .then(res => {
                setCategories(res.data);
            })
    }, [])
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();


    const handleAddProduct = data => {

        const productName = data.productName;
        const location = data.location;
        const originalPrice = data.originalPrice;
        const resalePrice = data.resalePrice;
        const yearsUsed = data.yearsUsed;
        console.log(productName, location, originalPrice, resalePrice, yearsUsed)


        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        category_name: data.category,
                        img: imgData.data.url,
                        product_name: productName,
                        location: location,
                        price_origin: originalPrice,
                        price_resale: resalePrice,
                        yearsUsed: yearsUsed,
                        date: new Date(),
                        seller_name: user?.displayName,
                        seller_email: user?.email,
                        status: "available",
                        isVerified: false
                    }

                    // save products information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            console.log(result)
                            Swal.fire({
                                icon: 'success',
                                title: 'You have created a product successfully',
                                timer: 1500
                            })
                            navigate('/dashboard/my-products')
                        })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.category_title}
                            >{category.category_title}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("productName", {
                        required: "Product Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="number" {...register("originalPrice", {
                        required: "Original Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resalePrice", {
                        required: "Resale Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Use Span</span></label>
                    <input type="number" {...register("yearsUsed", {
                        required: "Use span is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearsUsed && <p className='text-red-500'>{errors.yearsUsed.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add a Product" type="submit" />
            </form>

        </div>
    );
};

export default AddAProduct;