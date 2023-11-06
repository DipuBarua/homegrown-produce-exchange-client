import { Link } from "react-router-dom";
import img from "../../../assets/images/logo_homegrown.png"

const Navbar = () => {
    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
    </>

    const dropDownLink = <>
        <details>
            <summary>Dashboard</summary>
            <ul className="p-2">
                <li><Link to={'/'}>My-services</Link></li>
                <li><Link to={'/'}>Add-services</Link></li>
                <li><Link to={'/'}>My-schedules</Link></li>
            </ul>
        </details>
    </>

    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        {dropDownLink}

                    </ul>
                </div>
                <div className=" h-1/2 w-1/2">
                    <img className="" src={img} alt="" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    <li tabIndex={0}>
                        {dropDownLink}
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/'} className=" btn btn-warning">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;