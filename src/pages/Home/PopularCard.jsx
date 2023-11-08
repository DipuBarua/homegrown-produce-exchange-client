import { MdLocationOff } from "react-icons/md";
import { Link } from "react-router-dom";

const PopularCard = ({ serviceCard }) => {
    const { image, name, description, area, price, provider_img, provider_name, _id } = serviceCard;
    return (
        <div className="card lg:card-side bg-black shadow-xl">
            <figure><img className=" " src={image} alt="Album" /></figure>
            <div className=" text-white my-auto mx-auto px-5 space-y-7">
                <h2 className="card-title text-green-600 text-4xl rounded p-1">{name}</h2>
                <div className=" text-sm">
                    <p>{description.slice(0, 50)}...</p>
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
                        <p className=" py-1 text-sm font-semibold">Provider: {provider_name}</p>
                    </div>
                    <Link to={`/serviceDetails/${_id}`} className="btn btn-accent btn-outline">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;