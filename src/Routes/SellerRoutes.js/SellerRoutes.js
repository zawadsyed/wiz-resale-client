import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <DotLoader className='mx-auto my-auto' color="#d8ab06" />
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;