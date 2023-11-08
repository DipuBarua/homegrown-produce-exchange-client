import { useContext } from "react";
import { AuthContext } from "../../contextProviders/AuthProvider";

const AddService = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const service = form.service_name.value;
        const user_name = form.user_name.value;
        const email = form.email.value;
        const price = form.price.value;
        const area = form.area.value;
        const description = form.description.value;
        const provider_img = form.provider_img.value;
        const newService = {
            photo,
            service,
            user_name,
            email,
            price,
            area,
            description,
            provider_img,
        }

        console.log(newService);

        fetch('https://homegrown-produce-exchange-server-a11b8.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <form onSubmit={handleAddService} className="card-body bg-gray-100">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className=" space-y-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url
                                </span>
                            </label>
                            <input type="url" name="photo" defaultValue={''} placeholder="Picture URL of the Service" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service</span>
                            </label>
                            <input type="text" name="service_name" defaultValue={''} placeholder=" Service Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name="user_name" placeholder="Provier email" defaultValue={user?.displayName} className="input input-bordered" readOnly />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Provier email" defaultValue={user?.email} className="input input-bordered" readOnly />
                        </div>

                    </div>

                    <div className=" space-y-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" defaultValue={''} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <input type="text" name="area" placeholder="Service Area/Location" defaultValue={''} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Service Description" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Image
                                </span>
                            </label>
                            <input type="url" name="provider_img" defaultValue={user?.image} placeholder="url" className="input input-bordered" readOnly />
                        </div>

                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-block bg-blue-100">Add Service</button>
                </div>

            </form>
        </div>
    );
};

export default AddService;