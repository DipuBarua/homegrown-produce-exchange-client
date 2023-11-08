import { useLoaderData } from "react-router-dom";
import { FaSwatchbook } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../contextProviders/AuthProvider";


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const loadedService = useLoaderData();
    console.log(loadedService);
    const { image, name, description, area, price, provider_img, provider_name, } = loadedService;

    const handleBookNow = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const provider_email = form.provider_email.value;
        const price = form.price.value;
        const user_email = form.user_email.value;
        const date = form.date.value;
        const instruction = form.instruction.value;
        const booking = {
            name,
            provider_email,
            price,
            user_email,
            date,
            instruction
        }
        console.log(booking);

        fetch('https://homegrown-produce-exchange-server-a11b8.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


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


                        {/* <button onClick={handleBookNow} className="btn bg-blue-800 text-white">
                            Book Now
                            <FaSwatchbook></FaSwatchbook>
                        </button> */}


                        {/* modal  */}
                        <button className="btn bg-blue-800 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>
                            Book Now
                            <FaSwatchbook></FaSwatchbook>
                        </button>

                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">

                                {/* closs btn  */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn bg-transparent border-none text-red-400">X</button>
                                    </form>
                                </div>

                                {/* form  */}
                                <form onSubmit={handleBookNow} className="card-body bg-gray-100">
                                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className=" space-y-4">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Service</span>
                                                </label>
                                                <input type="text" name="name" defaultValue={name} placeholder="service or product name" className="input input-bordered" readOnly />
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Provider Email</span>
                                                </label>
                                                <input type="email" name="provider_email" placeholder="Provier email" defaultValue={''} className="input input-bordered" readOnly />
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <input type="text" name="price" placeholder="Price" defaultValue={"$" + price} className="input input-bordered" readOnly />
                                            </div>

                                        </div>

                                        <div className=" space-y-4">

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Your Email</span>
                                                </label>
                                                <input type="email" name="user_email" placeholder="user email" defaultValue={user?.email} className="input input-bordered" readOnly />
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Service Taking Date</span>
                                                </label>
                                                <input type="date" name="date" placeholder="" className="input input-bordered" required />
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text"> Instruction</span>
                                                </label>
                                                <input type="text" name="instruction" defaultValue={'I am happy with this service.'} placeholder="" className="input input-bordered" required />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-block bg-blue-100">Order Confirm</button>
                                    </div>

                                </form>

                            </div>
                        </dialog>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;