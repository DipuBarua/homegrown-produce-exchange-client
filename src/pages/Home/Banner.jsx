import img1 from "../../assets/images/banner_1.jpg"
import img2 from "../../assets/images/banner_2.jpg"
import img3 from "../../assets/images/banner_3.jpg"
import img4 from "../../assets/images/banner_4.jpg"


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full relative">
                    <img src={img1} className="w-full" />
                    <div className=" text-4xl text-white font-bold absolute left-1/3 top-1/3">
                        <p className="">Homegrown Produce Exchange</p>
                        <p className=" text-sm font-normal w-1/2 text-center ml-8">The Homegrown Produce Exchange is a community-focused platform or initiative where individuals share or trade locally grown or homegrown produce.</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src={img2} className="w-full" />
                    <div className=" text-4xl text-white font-bold absolute left-1/3 top-1/3">
                        <p className="">Homegrown Produce Exchange</p>
                        <p className=" text-sm font-normal w-1/2 text-center ml-8">The Homegrown Produce Exchange is a community-focused platform or initiative where individuals share or trade locally grown or homegrown produce.</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src={img3} className="w-full" />
                    <div className=" text-4xl text-white font-bold absolute left-1/3 top-1/3">
                        <p className="">Homegrown Produce Exchange</p>
                        <p className=" text-sm font-normal w-1/2 text-center ml-8">The Homegrown Produce Exchange is a community-focused platform or initiative where individuals share or trade locally grown or homegrown produce.</p>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src={img4} className="w-full" />
                    <div className=" text-4xl text-white font-bold absolute left-1/3 top-1/3">
                        <p className="">Homegrown Produce Exchange</p>
                        <p className=" text-sm font-normal w-1/2 text-center ml-8">The Homegrown Produce Exchange is a community-focused platform or initiative where individuals share or trade locally grown or homegrown produce.</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;