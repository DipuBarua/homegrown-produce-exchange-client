import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextProviders/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const currentUser = { email, password };
        console.log(currentUser);


        // log in -- Auth 
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : "/");
            })
            .catch(error => {
                console.log(error);
                alert();
            })

    }

    // google Login 
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : "/");
            })
            .catch(err => {
                console.log(err);
                alert();
            })
    }

    const alert = () => {
        toast('Wrong Try');
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <ToastContainer></ToastContainer>
            <div className="hero-content flex flex-col md:flex-row gap-10">
                <img src={''} alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className=" text-center text-3xl font-bold">Log In</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-warning rounded-none">Login</button>
                        </div>

                        <div className=" border border-black p-2 flex justify-center">
                            <button onClick={handleGoogleLogin} className="text-3xl"><FcGoogle></FcGoogle></button>
                        </div>

                        <div className=" border border-black p-2">
                            <p>Have an account? if no, please <Link to={'/register'}><button className="btn-link font-semibold text-orange-600">Sign Up</button></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;