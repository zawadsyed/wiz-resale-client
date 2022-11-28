import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AdminRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <DotLoader className='mx-auto' color="#d8ab06" />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;