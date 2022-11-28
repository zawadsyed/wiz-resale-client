import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logoImg from '../../assets/images/wiz-resale-logo.png';



const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='rounded-full'><Link>Blog</Link></li>
                            {
                                user?.uid && <li className='rounded-full'><Link to='/dashboard/allsellers'>Dashboard</Link></li>
                            }

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-[200px]' src={logoImg} alt="Wiz Resale" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 rounded-full p-0">
                        <li className='rounded-full'><Link to="/blog">Blog</Link></li>
                        {
                            user?.uid && <li className='rounded-full'><Link to="/dashboard">Dashboard</Link></li>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="dashboard-toggle" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        user?.uid ?
                            <button onClick={handleSignOut} className='btn btn-danger rounded-full'>Sign Out</button>
                            :
                            <>
                                <Link to="/signin">
                                    <button className='btn btn-ghost rounded-full'>Sign In</button>
                                </Link>
                                <Link to="/signup">
                                    <button className='btn btn-primary rounded-full'>Sign Up</button>
                                </Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;