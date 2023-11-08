import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PopularCard from "./PopularCard";

const Home = () => {
    const loadedCards = useLoaderData();
    console.log(loadedCards);
    return (
        <div>
            <Banner></Banner>

            <div className="mx-10 flex flex-col gap-10 my-14">
            {
                loadedCards.slice(0, 4).map(serviceCard => <PopularCard
                    key={serviceCard._id}
                    serviceCard={serviceCard}
                ></PopularCard>)
            }
            </div>
        </div>
    );
};

export default Home;