import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <DotLoader className='mx-auto' color="#d8ab06" />
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;