import Hero from "./objects/Hero";
import Jumbotron from "./objects/Jumbotron";
import Mdbitem from "./objects/MdbItem";
import ItemList from "./objects/ItemList";
import ItemGrid from "./objects/ItemGrid";

const Home = () => {
    return (
        <>
            <Hero />
            <Jumbotron />
            {/* <ItemList /> */}
            <Mdbitem />
        </>
    );
};

export default Home;
