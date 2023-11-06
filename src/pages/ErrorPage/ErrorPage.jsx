import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/images/error.png"

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" text-center font-bold">
            <h1 className=" text-3xl p-5">Opps!</h1>
            <p>Error: {error.statusText || error.message}</p>
            <span>Go Back </span>
            <Link to={'/'}><button className="btn btn-ghost m-2 text-blue-700">Home</button></Link>
            {
                error.status === 404 && <div>
                    <img className=" mx-auto" src={img} alt="" />
                </div>
            }
        </div>
    );
};

export default ErrorPage;