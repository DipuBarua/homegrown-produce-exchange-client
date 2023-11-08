import { useLoaderData } from "react-router-dom";
import { FaSwatchbook } from 'react-icons/fa';

const ServiceDetails = () => {

    const loadedService = useLoaderData();
    console.log(loadedService);
    const { image, name, description, area, price, provider_img, provider_name, _id } = loadedService;

    return (
        <div>
            <div className="text-center bg-blue-800 text-white font-medium p-2">
                <img className=" mx-auto w-16 h-16 my-1 rounded-full ring ring-white" src={provider_img} alt="" />
                <p>Service Owner : {provider_name}</p>
                <p>Location : {area}</p>
            </div>

            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-4">{description}</p>
                        <p className=" py-3">Price: ${price}</p>
                        <button className="btn bg-blue-800 text-white">
                            Book Now
                            <FaSwatchbook></FaSwatchbook>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;