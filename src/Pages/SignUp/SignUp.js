import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useJWTToken from '../../hooks/useJWTToken';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createEmail, setCreateEmail] = useState('');
    const [token] = useJWTToken(createEmail);
    const { createUser, updateUserProfile, providerSignIn } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    // const provider = new GoogleAuthProvider();

    if (token) {
        navigate('/');
    }
    const handleSignUp = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = data.role;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userProfile = {
                    displayName: name
                }
                updateUserProfile(userProfile)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'You have created an account successfully',
                            timer: 1500
                        })
                        saveUserToDatabase(email, name, role);
                    })
            })
            .catch(err => {
                console.error(err);
                setRegisterError(`${err.message}, Please try again`);
            })

        const saveUserToDatabase = (email, name, role) => {
            const user = { email, name, role, isVerified: false };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setCreateEmail(email);
                    }
                })
        }

    }
    // const handleGoogleSignIn = () => {
    //     providerSignIn(provider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             saveUserToDatabase(user?.email, user?.displayName)

    //         })
    //         .catch(err => {
    //             console.error(err)
    //             setRegisterError(`${err.message}, Please try again`);
    //         })
    //     const saveUserToDatabase = (email, name) => {
    //         const user = { email, name, role: "buyer", isVerified: false };
    //         fetch('http://localhost:5000/users', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(user)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.acknowledged) {
    //                     setCreateEmail(email);
    //                 }
    //             })
    //     }
    // }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">What are you??</span></label>
                        <select
                            {...register('role')}
                            className="select input-bordered w-full max-w-xs">
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                    {registerError && <p className='text-red-400'>{registerError}</p>}
                </form>
                <p>Already have an account <Link className='text-primary' to="/signin">Please Sign In</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'><FcGoogle className='mr-2'></FcGoogle></button>

            </div>
        </div>
    );
};

export default SignUp;