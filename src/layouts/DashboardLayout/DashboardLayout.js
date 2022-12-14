import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-toggle" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-toggle" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reported-items'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                                <li><Link to='/dashboard/my-products'>My Products</Link></li>
                            </>
                        }
                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
