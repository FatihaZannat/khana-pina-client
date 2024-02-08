import { useForm } from "react-hook-form"
import pic from '../../assets/others/authentication2.png'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import UseAuthContext from "../../hooks/AuthLoad";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createNewUser,updateUser } = UseAuthContext()
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) => {

        createNewUser(data.email, data.pass)
            .then(result => {
                // console.log(result.user);

                updateUser(data.name, data.photo)
                    .then(() => {
                        console.log('update');
                    }).catch((error) => {
                        console.log(error)
                    });
                reset()
            })
            .catch(e => console.log(e))

        navigate('/')
    }


    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-full  lg:text-left">
                        <img src={pic} alt="" />

                    </div>
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", { required: true, maxLength: 20, minLength: 3 })} placeholder="Type your name" className="input input-bordered" />


                                {errors.name?.type === 'required' && <p className="text-red-600">name is required</p>}
                                {errors.name?.type === 'maxLength' && <p className="text-red-600">max length  20 </p>}
                                {errors.name?.type === 'minLength' && <p className="text-red-600">at least 3 char </p>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text"
                                    {...register("photo", { required: true })} placeholder="Type your name" className="input input-bordered" />


                                {errors.photo?.type === 'required' && <p className="text-red-600">name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text"  {...register("pass", {
                                    required: true,
                                    minLength: 8,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                                })} placeholder="password" className="input input-bordered" />
                                <label className="label ">
                                    <a href="#" className="mr-5 label-text-alt link link-hover">Forgot password?</a>
                                    {errors.pass?.type === 'required' && <p className="text-red-600">password is required</p>}
                                    {errors.pass?.type === 'minLength' && <p className="text-red-600">min length  8 </p>}
                                    {errors.pass?.type === 'pattern' && <p className="text-red-600">1 uppercase 1 lowercase 1 number 1 special char </p>}
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='mx-auto my-1 '>
                            <p className='text-red-500'><small>Allready register <Link to='/login'>Go to log In</Link> </small></p>
                            <p className='py-3 '><span> Or sign up here    </span>
                                <button className=' border-2 p-1 rounded-full border-black '><FcGoogle></FcGoogle></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;