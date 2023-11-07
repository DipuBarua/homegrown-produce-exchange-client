import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProviders/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.url.value;
        const newUser = { name, email, password, photo }
        console.log(newUser);

        // error msg reset 
        setErrorMessage('');
        setSuccessMessage('');

        // checking password creation rules
        if (password.length < 6) {
            setErrorMessage('Error: Password should be at least Six(6) characters or more longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Error: Password should have at least One Upper Case character.');
            return;
        }
        else if (!/[@$!%*#?&]/.test(password)) {
            setErrorMessage('Error: Password should have at least One Special Character( @ $ ! % * # ? & ).');
            return;
        }


        // sign up -- Auth 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccessMessage('Registration Successfull');
            })
            .catch(error => {
                console.log(error);
                setErrorMessage('Error:', setErrorMessage(error.message))
            })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex flex-col md:flex-row gap-10">
                <img src={''} alt="" />
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className=" text-center text-3xl font-bold">Sign Up</h2>
                        <h2 className=" text-center text-red-700">{errorMessage}</h2>
                        <h2 className=" text-center text-green-600">{successMessage}</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" name="url" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-warning">Sign Up</button>
                        </div>
                        <div>
                            <p>Already have an account? if Yes, please <Link to={"/login"}><button className="btn-link font-semibold text-orange-600">Login</button></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;