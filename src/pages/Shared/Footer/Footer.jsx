import img from "../../../assets/images/logo_homegrown.png"
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">My-services</a>
                    <a className="link link-hover">Add-services</a>
                    <a className="link link-hover">My-schedules</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <img className=" w-1/2" src={img} alt="" />
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 px-10">
                        <FaXTwitter className=" text-2xl"></FaXTwitter>
                        <FaFacebookF className=" text-2xl text-blue-600"></FaFacebookF>
                        <FaYoutube className=" text-2xl text-red-600"></FaYoutube>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;