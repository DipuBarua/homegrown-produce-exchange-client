
const ManageServiceRow = ({ manageService, handleDelete }) => {
    const { _id, name, area, price, image, provider_img, provider_name } = manageService;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {provider_name}
            </td>
            <td>
                {area}
            </td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs bg-blue-400 p-1">Update</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-red-300 p-1">Delete</button>
            </th>
        </tr>

    );
};

export default ManageServiceRow;