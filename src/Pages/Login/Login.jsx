import { useEffect, useState } from 'react';

import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import pic from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuthContext from '../../hooks/AuthLoad';
import Swal from 'sweetalert2';


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {signInUser,googleSignIn} = UseAuthContext()
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const [disabled, setdisabled] = useState(false)
// console.log(location);
   

    const onSubmit = (data) => {

        signInUser(data.email, data.pass)
        .then(() => {
            
            Swal.fire({
                title: "Successfull loging",
                
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                   
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(location?.state ? location?.state : '/')
        })
        .catch(err => console.log(err))
        reset()
    }

    const hndleGoogleSignIn = () => {
        googleSignIn()
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const validateMyCaptcha = (e) => {
        const captcha = e.target.value

        if (validateCaptcha(captcha) === true) {
            setdisabled(false)
        } else {
            setdisabled(true)
        }
    }
    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={pic} alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("pass")} placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <div>
                                    <LoadCanvasTemplateNoReload />
                                </div>
                                <input type="text" name='captcha' onBlur={validateMyCaptcha} placeholder="enter the capcha" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Reload capcha</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='mx-auto my-1 '>
                            <p className='text-red-500'><small>New here? <Link to='/signUp'>Create a New Account</Link> </small></p>
                            <p className='py-3 '><span> Or sign up here    </span>
                                <button onClick={hndleGoogleSignIn} className=' border-2 p-1 rounded-full border-black '><FcGoogle></FcGoogle></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;