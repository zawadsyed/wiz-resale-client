import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/images/error.png'
const ErrorPage = () => {
    return (
        <div className='mx-auto mt-24'>
            <h1 className='text-5xl font-semibold'>Look like you've been lost in the space</h1>
            <img className='mx-auto mt-12 w-96' src={error} alt="404 ERR0R" />
            <Link to='/'>
                <button className='btn btn-primary'>Go Back to Home</button>
            </Link>

        </div>
    );
};

export default ErrorPage;