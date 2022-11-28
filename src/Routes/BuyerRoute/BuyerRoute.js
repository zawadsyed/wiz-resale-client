import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <DotLoader className='mx-auto my-auto' color="#d8ab06" />
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;