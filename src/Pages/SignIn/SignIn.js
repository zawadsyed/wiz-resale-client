import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import useJWTToken from "../../hooks/useJWTToken";


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, providerSignIn } = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [token] = useJWTToken(signInEmail);
    // const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true })
    }

    const handleSignIn = data => {
        const email = data.email;
        const password = data.password;
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setSignInEmail(email);
            })
            .catch(err => {
                console.error(err);
                setSignInError(`${err.message}, Please try again`)
            })
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
    //             setSignInError(`${err.message}, Please try again`);
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
    //                     setSignInEmail(email);
    //                 }
    //             })
    //     }
    // }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign In</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>
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
                    <input className='btn btn-accent w-full mt-4' value="Sign In" type="submit" />
                    {signInError && <p className='text-red-400'>{signInError}</p>}
                </form>
                <p>New Here??<Link className='text-accent' to="/signup">Please Sign Up</Link></p>
                <div className="divider">OR</div>
                {/* <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'><FcGoogle className='mr-2'></FcGoogle></button> */}

            </div>
        </div>
    );
};

export default SignIn;