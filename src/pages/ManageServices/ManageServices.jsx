import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProviders/AuthProvider";
import axios from "axios";
import ManageServiceRow from "./ManageServiceRow";
import Swal from "sweetalert2";

const ManageServices = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    console.log(user.email);
    const [manageServices, setManageServices] = useState([]);
    // console.log(user);
    const url = `https://homegrown-produce-exchange-server-a11b8.vercel.app/products?email=${user.email}`;

    useEffect(() => {

        // using axios instead of fetch 
        axios.get(url)
            .then(res => {
                setManageServices(res.data)
                console.log("axios:", res.data);
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setManageServices(data);
        //         console.log(data);
        //     })



    }, [url]);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://homegrown-produce-exchange-server-a11b8.vercel.app/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = manageServices.filter(manageService => manageService._id !== id);
                            setManageServices(remaining);
                        }

                    })


            }
        });
    }

    return (
        <div>
            <p> total: {manageServices.length}</p>


            {/* Service Manage Table  */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Service Provider</th>
                            <th>Service area</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            manageServices.map(manageService => <ManageServiceRow
                                key={manageService._id}
                                manageService={manageService}
                                handleDelete={handleDelete}
                            ></ManageServiceRow>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Service Provider</th>
                            <th>Service area</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ManageServices;