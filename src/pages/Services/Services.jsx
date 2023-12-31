import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://homegrown-produce-exchange-server-a11b8.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <div>
            <p>Service available: {services.length}</p>

            <div className=" mt-3 mb-10 flex relative left-1/3 ">
                <input type="text" placeholder="search here" className="input input-bordered input-success w-full max-w-xs" />

                <div className="btn bg-green-600 rounded-l-none p-3 absolute left-80">Search</div>
            </div>

            <div className="mx-10 grid md:grid-cols-2 gap-24">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className=" text-center my-10">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Show All</button>
            </div>
        </div>
    );
};

export default Services;