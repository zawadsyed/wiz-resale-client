import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { category_title, img } = category;

    return (
        <div className="card bg-base-100 ">
            <img className='rounded-lg' src={img} alt="car!" />
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">{category_title}</h2>
                <Link to={`/categories/${category_title}`}>
                    <button className="btn btn-primary w-full">Get Now</button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;