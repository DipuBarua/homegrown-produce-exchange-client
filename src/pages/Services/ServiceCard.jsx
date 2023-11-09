import { MdLocationOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { image, name, description, area, price, provider_img, provider_name, _id } = service;
    
    return (
        <div className="card lg:card-side bg-black shadow-xl">
            <figure><img className=" w-full rounded-r-xl" src={image} alt="Album" /></figure>
            <div className="card-body text-white ">
                <h2 className="card-title text-green-600 rounded p-1">{name}</h2>
                <div className=" text-sm">
                    <p>{description.slice(0, 100)}...</p>
                    <div className=' my-1 flex items-center'>
                        <MdLocationOff></MdLocationOff>
                        <span>{area}</span>
                    </div>

                    <p>Price: ${price}</p>
                </div>
                <div className=" flex justify-between">
                    <div className="avatar flex flex-col gap-1">
                        <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                            <img src={provider_img} />
                        </div>
                        <p className=" text-sm">{provider_name}</p>
                    </div>
                    <Link to={`/serviceDetails/${_id}`} className="btn btn-accent btn-outline">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;